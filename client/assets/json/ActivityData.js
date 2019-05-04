const genarateGA = (day) => {
    return `ga('send', 'event', 'link', 'make', '${day}\')`;
};

export const items = [
    {
        href: "https://github.com/korosuke613/miyadai-sso-auto-login",
        ga: genarateGA('miyadai_auto_login'),
        day: "2018/08",
        title: "宮大SSO自動ログインスクリプト"
    },
    {
        href: "https://github.com/korosuke613/pict-java",
        ga: genarateGA('pict4java'),
        day: "2018/07",
        title: "PICTをJava/Kotlinから利用するJNAクラス"
    },
    {
        href: "https://hub.docker.com/r/korosuke613/etrobo-docker/",
        ga: genarateGA('etrobo_docker'),
        day: "2017/12",
        title: "ETロボコンのビルド環境Docker Image"
    },
    {
        href: "http://earth.cs.miyazaki-u.ac.jp/seminar/",
        ga: genarateGA('senmon2017'),
        day: "2017/10",
        title: "専門教育入門セミナーT 2017 in 片山（徹）研"
    },
    {
        href: "https://github.com/korosuke613/etrobocon2017",
        ga: genarateGA('ETrobocon2017'),
        day: "2017/09",
        title: "ETロボコン2017"
    },
    {
        href: "https://twitter.com/miya_330_bot",
        ga: genarateGA('MiyadaiOshiraseBot'),
        day: "2017/07",
        title: "宮大支援課お知らせBOT【非公式】"
    }
]
