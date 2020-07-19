var cash_url;

function main() {
    setTimeout(main, 100);
    let href = $('a#swfMailTo').attr('href');
    if (!href) return;
    let url = decode(href.match(/https.+?&/)[0]);
    if (cash_url != url && url != null) {
        cash_url = url;
        $('div#tell-a-friend div').prepend('<a id="clipboard1145141919810">クリップボードに保存</a>');

        $('#clipboard1145141919810').click(function () {
            navigator.clipboard.writeText(url);
        })

    }
}
main();

function decode(str) {
    return str.replace(/(%3A)/gi, ':').replace(/(%2F)/gi, '/').replace(/(%3D)/gi, '=').replace(/(&)/gi, '');
}