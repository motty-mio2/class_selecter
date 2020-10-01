var elements = document.getElementsByClassName("type_course depth_3 contains_branch");
var elements_number = elements.length;

var classlist = [];
let i;
var items;

chrome.storage.local.get({ "itme_number": -1 }, function (result) {
    if (result == -1) {
        items = 0;
        chrome.storage.local.set({ "itme_number": 0 }, function () {
        });
    } else {
        items = result;
    }
});

for (i = 0; i < elements_number; i++) {
    var classname = elements[i].getElementsByTagName("p")[0].getElementsByTagName("a")[0].textContent;
    var ends = classname.indexOf("]");
    var classtag = classname.slice(1, ends);
    classlist[i] = classtag;
    var exist = 1;
    chrome.storage.local.get({ classtag: -1 }, function (result) {
        exist = result;
    });
    if (exist == -1) {
        chrome.storage.local.set({ classtag: 1 }, function () {
        });
    }

    console.log(classlist[i]);
}
