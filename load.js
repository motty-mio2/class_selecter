var typelist = ["通年", "前期", "後期", "第1クォーター", "第2クォーター", "第3クォーター", "第4クォーター"];
decodeURIComponent.open()
for (var i = 0; i < typelist.length; i++) { //initialize
    // インデックスを指定してキーを取得
    chrome.storage.get({ typelist[i]: -1 }, function (result) {
        if (result == -1) {
            chrome.storage.local.set({ typelist[i]: 1 }, function () {
            });
        }
    });

    document.write("<br></br>")
    // キーを指定して値を取得し、コンソールに出力
    var item = localStorage.getItem(key);
    document.write(typelist[i]);
    if (item == 1) {
        document.write("<input type="checkbox" checked="checked"></input>");
    } else {
        document.write("<input type="checkbox"></input>");
    }
    document.write("<br></br>")
}
document.close()
