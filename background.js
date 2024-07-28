//console.log("Hello");
//chrome.storage.local.set({ "test": 1 }, function () { });

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(Object.values(message)[0]);
    var ret;
    if (Object.values(message)[0] == -1) {
        chrome.storage.local.get(message, function (response) {
            ret = response;
        })
    } else {
        chrome.storage.local.set(message, function (response) {
            ret = response;
        })
    }

    setTimeout(function () {
        sendResponse(ret)
    })

    return true
});


//var browser = browser || chrome;

var now = new Date();
var year = now.getFullYear();

var num = 10;

var headlink = "https://kym-syllabus.ofc.kobe-u.ac.jp/kobe_syllabus/year/num/data/year_";
var taillink = ".html";



chrome.runtime.onInstalled.addListener(function () {
    //コンテキストメニューに拡張のメニューを追加
    const search_menu = chrome.contextMenus.create({
        "id": "syllabusextension",
        "title": '"%s"を検索', //%s は選択している文字列で置き換わる
        "contexts": ["all"], //選択しているときのみメニューに表示される
        "type": "normal",
        /*
        "onclick": function (info) { //クリックされた際のアクション
            //var selection = info.selectionText;
            //var SLink = headlink + selection + taillink;
            var SLink = "https://google.com";
            chrome.tabs.create({ url: SLink });
        }
        */
    });
});

chrome.contextMenus.onClicked.addListener(function (item) {
    console.log(item.selectionText);
    chrome.tabs.create({ url: "https://kym-syllabus.ofc.kobe-u.ac.jp/campussy" });
    console.log(document.URL);//.querySelector("body > center > font > a"));
    //click();
    //console.log(element);
    //element.click();
});


/*
var ContextMenus = new function () {
    var items = {};
    var callbacks = {};

    this.setItems = function (aItems) {
        aItems.forEach(function (item) {
            callbacks[item.id] = item.onclick;
            item.onclick = null;
            items[item.id] = item;
        });
    };

    this.create = function () {
        Object.keys(items).forEach(
            function (key) {
                chrome.contextMenus.create(items[key]);
            }
        );
    };

    chrome.contextMenus.onClicked.addListener(function (info, tab) {
        callbacks[info.menuItemId](info, tab);
        //chrome.tabs.create({ url: "google.com" });
    });
};

ContextMenus.setItems([
    {
        "id": "syllabusextension",
        "title": '"%s"を検索', //%s は選択している文字列で置き換わる
        "contexts": ["selected"], //選択しているときのみメニューに表示される
        "type": "normal",
        "onclick": "%s"
    }
]);

chrome.runtime.onInstalled.addListener(ContextMenus.create);
*/