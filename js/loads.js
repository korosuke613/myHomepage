function load_html(pathHTML) {

    $.ajax({
        url: pathHTML, //パスはcommon.jsが読み込まれたHTMLファイルが基準になります
        cache: true, //キャッシュを利用するか（お好みで）
        async: true, //非同期で読み込むか（お好みで）
        success: function (html) {
            html = html.replace(pathHTML);
            document.write(html);
        }
    });

}
