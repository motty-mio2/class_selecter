var doc = document.getElementsByTagName("form")[0];
console.log(doc);
console.log(typeof (doc));

var typelist = ["通年", "前期", "後期", "第1クォーター", "第2クォーター", "第3クォーター", "第4クォーター"];
//document.write("<p>JavaScriptファイルの読み込みテスト</p>");

//doc.insertAdjacentHTML('afterbegin', "Hello" + " " + "World");

/*
var que1 = {}

for (var i = 0; i < typelist.length; i++) {
    que1[typelist[i]] = -1;
}

for (var i = 0; i < typelist.length; i++) {
    chrome.runtime.sendMessage(data, function () { });
    doc.insertAdjacentHTML('beforebegin', '<input type="checkbox" id=' + name + ">" + name + "<br>");
}
chrome.storage.local.get(que1, function (result) {
    console.log(result);
});
*/

let ap = document.getElementById("apply");

ap.onclick = function (element) {
    console.log("clicked");
    for (var i = 0; i < typelist.length; i++) {
        var name = typelist[i];
        //console.log(name);

        if (document.getElementById(name).checked) {
            var data = { [name]: 1 };
        } else {
            var data = { [name]: 0 };
        }
        console.log(data);
        //chrome.storage.local.set(data, function () { });
        chrome.runtime.sendMessage(data, function (response) {
            console.log("response : ", response)
        });
    }
};

