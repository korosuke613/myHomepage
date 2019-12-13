const genarateGA = day => {
  return `ga('send', 'event', 'link', 'make', '${day}')`;
};

export const items = [
  {
    href: "https://korosuke613.hatenablog.com/entry/2019/09/12/211308",
    ga: genarateGA("Cybozu_riyuu"),
    day: "2019/12",
    title: "僕がサイボウズに入社する理由"
  },
  {
    href: "https://www.etrobo.jp/cs-2019-result/",
    ga: genarateGA("et2019_cs"),
    day: "2019/11",
    title: "ETロボコン2019 全国大会出場(DA,14チーム中10位,モデルランクB)"
  },
  {
    href: "https://www.etrobo.jp/%e3%80%90%e4%b9%9d%e5%b7%9e%e5%8d%97%e5%9c%b0%e5%8c%ba%e3%80%91%e5%9c%b0%e5%8c%ba%e5%a4%a7%e4%bc%9a%e7%b5%90%e6%9e%9c/",
    ga: genarateGA("et2019_ls"),
    day: "2019/09",
    title: "ETロボコン2019 九州南大会(DA,総合優勝,モデルランクC,IPA賞)"
  },
  {
    href: "https://ses.sigse.jp/2019/accepted.html",
    ga: genarateGA("SES2019"),
    day: "2019/08",
    title: "SES2019(査読有り) 論文発表"
  },
  {
    href: "https://korosuke613.hatenablog.com/entry/2019/06/24/171246",
    ga: genarateGA("latex-docker"),
    day: "2019/06",
    title: "korosuke613/ubuntu-texlive-ja-devcontainer"
  },
  {
    href: "https://github.com/korosuke613/book-info-from-amazon",
    ga: genarateGA("BIFA"),
    day: "2019/03",
    title: "amazonの本の情報を簡単に取得するChrome拡張"
  },
  {
    href:
      "https://engineers.recruit-jinji.jp/event/s-internship-2019-engineer/",
    ga: genarateGA("intern_recruit"),
    day: "2019/03",
    title: "リクルートライフスタイルインターン(1ヶ月)"
  },
  {
    href:
      "https://www.researchgate.net/publication/331335335_Application_of_Pairwise_Testing_to_Test_Cases_by_Boundary_Value_Analysis_in_BWDM",
    ga: genarateGA("icarob2019"),
    day: "2019/01",
    title: "ICAROB2019(査読有り) 論文発表"
  },
  {
    href: "http://teams.etrobo.jp/2018/taikai/championsip_result2.php",
    ga: genarateGA("et2018_cs"),
    day: "2018/11",
    title: "ETロボコン2018 全国大会出場(14チーム中8位)"
  },
  {
    href: "http://kyushuminami.etrobo.jp/",
    ga: genarateGA("et2018_ls"),
    day: "2018/09",
    title: "ETロボコン2018 九州南大会(DA優勝)"
  },
  {
    href: "https://w2.gakkai-web.net/gakkai/jceee_pro/program/index.html",
    ga: genarateGA("jceee2018"),
    day: "2018/09",
    title: "JCEEE2018 論文発表"
  },
  {
    href: "https://github.com/korosuke613/miyadai-sso-auto-login",
    ga: genarateGA("miyadai_auto_login"),
    day: "2018/08",
    title: "宮大SSO自動ログインスクリプト"
  },
  {
    href: "https://github.com/korosuke613/pict-java",
    ga: genarateGA("pict4java"),
    day: "2018/07",
    title: "PICTをJava/Kotlinから利用するJNAクラス"
  },
  {
    href: "https://hub.docker.com/r/korosuke613/etrobo-docker/",
    ga: genarateGA("etrobo_docker"),
    day: "2017/12",
    title: "ETロボコンのビルド環境Docker Image"
  },
  {
    href: "http://earth.cs.miyazaki-u.ac.jp/seminar/",
    ga: genarateGA("senmon2017"),
    day: "2017/10",
    title: "専門教育入門セミナーT 2017 in 片山（徹）研"
  },
  {
    href: "https://github.com/korosuke613/etrobocon2017",
    ga: genarateGA("ETrobocon2017"),
    day: "2017/09",
    title: "ETロボコン2017"
  },
  {
    href: "https://twitter.com/miya_330_bot",
    ga: genarateGA("MiyadaiOshiraseBot"),
    day: "2017/07",
    title: "宮大支援課お知らせBOT【非公式】"
  }
];
