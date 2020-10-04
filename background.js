console.log("Hello");
chrome.storage.local.set({ "test": 1 }, function () { });

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