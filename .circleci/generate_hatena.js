'use strict'

const axios = require('axios');
const xml2js = require('xml2js');
const moment = require('moment');
const fs = require('fs');
const HatenaItem = require('./HatenaItem');

const get_xml =
    async (url) => {
  try {
    const res = await axios.get(
        url, {auth: {username: 'korosuke613', password: process.env.HATENA_PASS}});
    return res.data;
  } catch (err) {
    const {status, statusText} = err.response;
    console.log(`Error! HTTP Status: ${status} ${statusText}`);
  }
}

const getItems =
    (entry, item_list) => {
      for (let e of entry) {
        if (e['app:control'][0]['app:draft'][0] == 'yes') {
          continue;
        }
        const item = new HatenaItem(
            moment(e.published.toString()).format('YYYY-MM-DD'),
            e.title.toString(), e.link[1].$.href);
        // console.log(`${moment(e.published.toString()).format('YYYY-MM-DD')}${e.title.toString()}`)
        item_list.push(item);
      }
    }

const createItems =
    async (data, item_list) => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(data.toString(), (err, result) => {
      if (err) {
        console.log(err);
      } else {
        const entry = result.feed.entry;  // 配列になってる
        const next_url = result.feed.link[1].$.href;
        getItems(entry, item_list)
        resolve(next_url);
      }
    });
  });
}

const main =
    async () => {
  let item_list = [];
  let url =
      'https://blog.hatena.ne.jp/korosuke613/korosuke613.hatenablog.com/atom/entry';
  while (item_list.length < 10) {
    const data = await get_xml(url);
    url = await createItems(data, item_list);
  }
  fs.writeFileSync('../client/assets/json/hatena.json', JSON.stringify(item_list));
}

main();