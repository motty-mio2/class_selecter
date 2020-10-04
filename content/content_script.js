var typelist = ["通年", "前期", "後期", "第1クォーター", "第2クォーター", "第3クォーター", "第4クォーター"];

var elements = document.getElementsByClassName("type_course depth_3 contains_branch");
var elements_number = elements.length;

console.log("page loaded");

var que1 = {}

for (var i = 0; i < typelist.length; i++) {
    que1[typelist[i]] = -1;
}

console.log(que1);

chrome.storage.local.get(que1, function (result) {
    console.log(result);
    for (var i = 0; i < elements_number; i++) {
        var classname = elements[i].getElementsByTagName("p")[0].getElementsByTagName("a")[0].textContent;
        var ends = classname.indexOf("]");
        var classtag = classname.slice(1, ends);

        try {
            var view = result[classtag];
        } catch (error) {
            var view = 1;
        }
        console.log(classtag, view);
        if (view == 0) {
            elements[i].innerHTML = "";
        }
    }
});

