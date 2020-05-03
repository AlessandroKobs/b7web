chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { urlContains: 'https://alunos.b7web.com.br/' },
                })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});



