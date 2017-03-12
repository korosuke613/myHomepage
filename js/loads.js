function load_html(pathHTML) {

    $.ajax({
        url: pathHTML, //パスはcommon.jsが読み込まれたHTMLファイルが基準になります
        cache: false, //キャッシュを利用するか（お好みで）
        async: false, //非同期で読み込むか（お好みで）
        success: function (html) {
            html = html.replace(pathHTML);
            document.write(html);
        }
    });

}
