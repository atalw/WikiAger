var yearRegex = /\b\d{4}\b/gi;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (document.querySelector(".bday") != null)
            born = document.querySelector(".bday").textContent;
        else
            return true;
        yearOfBirth = born.split("-")[0];
        document.body.innerHTML = document.body.innerHTML.replace(yearRegex, function(x) {
            var age = x - yearOfBirth
            return x + " [" + age + " years old]";
        });
        sendResponse({status: "done"});
        return true;
    }
);
