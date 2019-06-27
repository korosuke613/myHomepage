"use strict";

const axios = require("axios");
const xml2js = require("xml2js");
const moment = require("moment");
const fs = require("fs");
const HatenaItem = require("./HatenaItem");

// APIを叩いてはてなブログのXMLを取得する。
const getHatenaData = async url => {
  try {
    const res = await axios.get(url, {
      auth: { username: "korosuke613", password: process.env.HATENA_PASS }
    });
    return res.data;
  } catch (err) {
    const { status, statusText } = err.response;
    console.log(`Error! HTTP Status: ${status} ${statusText}`);
  }
};

// XMLから記事一覧と次の記事一覧のURIを抽出する。
const extractItemsAndNextUri = async data => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(data.toString(), (err, result) => {
      if (err) {
        reject(err);
      } else {
        const entry = result.feed.entry;
        const next_url = result.feed.link[1].$.href;
        resolve({ entry, next_url });
      }
    });
  });
};

// 下書きを除く記事を配列に追加する。
const insertItems = (entry, item_list) => {
  for (let e of entry) {
    if (e["app:control"][0]["app:draft"][0] == "yes") {
      // 下書き記事をスキップする。
      continue;
    }

    // はてな記事のJSONを生成。
    const item = new HatenaItem(
      moment(e.published.toString()).format("YYYY-MM-DD"),
      e.title.toString(),
      e.link[1].$.href
    );
    item_list.push(item);
  }
};

const main = async () => {
  // 記事一覧を取得するURIは”https://blog.hatena.ne.jp/{はてなID}/{ブログID}/atom/entry”
  let url =
    "https://blog.hatena.ne.jp/korosuke613/korosuke613.hatenablog.com/atom/entry";

  // 記事を格納する配列
  let item_list = [];

  // 下書き以外の記事が10件溜まるまで記事一覧を取得する
  while (item_list.length < 10) {
    const xml_data = await getHatenaData(url); // APIを叩いて記事一覧のXMLを取得する。
    const { entry, next_url } = await extractItemsAndNextUri(xml_data); // 記事一覧と次の記事一覧のURIを抽出する。
    insertItems(entry, item_list); // item_listに下書き以外の記事一覧を格納する。

    url = next_url;
  }

  // 記事一覧をJSON形式で保存
  fs.writeFileSync(
    "./client/assets/json/hatena.json",
    JSON.stringify(item_list)
  );
};

main();
