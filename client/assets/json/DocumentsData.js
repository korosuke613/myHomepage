const genarateGA = (kind, title) => {
    return `ga('send', 'event', 'link', '${kind}\', '${title}\')`;
};

const genarateGaDown = (kind, title) => {
    return `ga('send', 'event', 'download', '${kind}\', '${title}\')`;
};

export const other = [
    {
        href: "https://qiita.com/Shitimi_613/items/9706d57fb7bc17cbed0e",
        title: "DockerでらくらくLaTeX環境構築",
        ga: genarateGA("qiita", "docker-latex"),
        day: "2018/03"
    },
    {
        href: "https://qiita.com/Shitimi_613/items/35b3a30ba55ee6f8e01d",
        ga: genarateGA("qiita", "docker_ev3"),
        day: "2018/01",
        title:
            "Windows10HomeでDockerを使って簡単にTOPPERS/EV3RTのビルド環境を構築する"
    },
    {
        href: "https://qiita.com/Shitimi_613/items/24ed62480fe8247b476b",
        ga: genarateGA("qiita", "vdm++_katateigi"),
        day: "2017/12",
        title: "VDM++における型定義"
    },
    {
        href: "https://qiita.com/Shitimi_613/items/051d04eb139043222567",
        ga: genarateGA("qiita", "senmon2"),
        day: "2017/10",
        title: "[Bash on Windows] ev3rt開発環境をWindowsで作る2"
    },
    {
        href: "https://qiita.com/Shitimi_613/items/09bec911048e55285868",
        ga: genarateGA("qiita", "senmon1"),
        day: "2017/10",
        title: "[Bash on Windows] ev3rt開発環境をWindowsで作る1"
    },
    {
        href: "https://www.slideshare.net/FutaHirakoba/ss-79797319",
        ga: genarateGA("slide", "eternal_programa.slide"),
        day: "2017/09",
        title: "僕たちがいつまでも​プログラマでいるには？"
    },
    {
        href: "http://qiita.com/Shitimi_613/items/60d994f0a8b9e8890d4c",
        ga: genarateGA("qiita", "django-heroku-2"),
        day: "2017/08",
        title: "DjangoアプリをHerokuにデプロイする[その2]"
    },
    {
        href: "http://qiita.com/Shitimi_613/items/6627d0ce042d38b86893",
        ga: genarateGA("qiita", "django-heroku-1"),
        day: "2017/07",
        title: "DjangoアプリをHerokuにデプロイする[その1]"
    },
    {
        href: "http://qiita.com/Shitimi_613/items/254730d6dff96f6459ca",
        ga: genarateGA("qiita", "python-screenshot"),
        day: "2017/07",
        title:
            "[Python3] selenium + PhantomJSでスクリーンショット取得し、HTML要素を指定してをクロップする方法"
    },
    {
        href: "https://www.slideshare.net/FutaHirakoba/ss-79932952",
        ga: genarateGA("slide", "freePresen2.slide"),
        day: "2017/06",
        title: "トゲのある仮面ライダー、アマゾンズの紹介"
    },
    {
        href: "https://www.slideshare.net/FutaHirakoba/sns-79932981",
        ga: genarateGA("slide", "freePresen1.slide"),
        day: "2017/04",
        title: "デジタル一眼レフカメラを利用したインドア派からの脱却"
    },
    {
        href: "http://qiita.com/Shitimi_613/items/28e0730a7858fd79d4fd",
        ga: genarateGA("qiita", "gitless_brew"),
        day: "2017/02",
        title:
            "brewでGitressをインストールする方法とglコマンドが使えない問題の解決策"
    },
    {
        href: "http://qiita.com/Shitimi_613/items/8b25de2c586cc85737af",
        ga: genarateGA("qiita", "gitless_official"),
        day: "2017/02",
        title: "gitをシンプルでわかりやすくするツールGitlessの紹介[和訳]"
    },
    {
        href: "https://www.dropbox.com/s/genaioy1u26t6oq/gitless%28%E6%97%A5%E6%9C%AC%E8%AA%9E%E8%A8%B3%29.pdf?dl=0",
        ga: genarateGaDown("pdf", "gitless.pdf"),
        day: "2017/01",
        title: "チームで行うコーディング作業を容易にする方法"
    },
    {
        href: "https://www.dropbox.com/s/j7i5hhixjr1h4s5/LaTeX%E3%82%AF%E3%82%A4%E3%83%83%E3%82%AF%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9.pdf?dl=0",
        ga: genarateGaDown("pdf", "quickLaTeX.pdf"),
        day: "2016/11",
        title: "LaTeXコマンド集"
    },
    {
        href: "https://www.dropbox.com/s/3hiu7p4uier7efr/%E5%AE%AE%E5%B4%8E%E5%A4%A7%E5%AD%A6%E5%9B%BD%E9%9A%9B%E4%BA%A4%E6%B5%81%E5%AE%BF%E8%88%8E%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E5%AF%AE%E5%BD%B9%E5%88%B6%E5%BA%A6%5B2016-10-17%5D.pdf?dl=0",
        ga: genarateGaDown("pdf", "ryouyaku.pdf"),
        day: "2016/10",
        title: "宮崎大学国際交流宿舎における寮役制度"
    },
    {
        href: "https://www.dropbox.com/s/upuhbvi6nlo3fun/%E3%82%A4%E3%82%AE%E3%83%AA%E3%82%B9%E3%81%AF%E4%BD%95%E6%95%85EU%E3%82%92%E9%9B%A2%E8%84%B1%E3%81%97%E3%81%9F%E3%81%AE%E3%81%8B%EF%BC%9F.pdf?dl=0",
        ga: genarateGaDown("pdf", "brexit.pdf"),
        day: "2016/08",
        title: "イギリスは何故EUを離脱するのか"
    },
    {
        href: "http://qiita.com/Shitimi_613/items/1b0eb36ca6413a521ec2",
        ga: genarateGA("qiita", "getopt"),
        day: "2016/07",
        title:
            "プログラムにコマンドラインからUNIX風のオプションを渡す方法(getopt関数)"
    },
    {
        href: "http://qiita.com/Shitimi_613/items/bcd6a7f4134e6a8f0621",
        ga: genarateGA("qiita", "psql_cheat"),
        day: "2016/07",
        title: "PostgreSQLコマンドチートシート"
    },
    {
        href: "https://www.dropbox.com/s/oz708e8k3ild0vk/roman_trans%28manual%29.ver.2.0.pdf?dl=0",
        ga: genarateGaDown("pdf", "roma.pdf"),
        day: "2016/07",
        title: "roman_num_trans(manual)"
    },
    {
        href: "https://www.slideshare.net/FutaHirakoba/et-79932849",
        ga: genarateGA("prezen", "etrobo.slide"),
        day: "2014/11",
        title: "ETロボ"
    },
    {
        href: "https://www.slideshare.net/FutaHirakoba/ss-79932897",
        ga: genarateGA("prezen", "hirakoba.slide"),
        day: "2014/05",
        title: "自己紹介パワポ"
    },
    {
        href: "https://www.slideshare.net/FutaHirakoba/ss-79932796",
        ga: genarateGA("prezen", "uzu.slide"),
        day: "2013/08",
        title: "渦電流とその利用"
    }
]
