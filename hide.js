const hideSettings = {
    "hot": browser.storage.managed.get("hot"),
    "jobs": browser.storage.managed.get("jobs"),
    "meta": browser.storage.managed.get("meta"),
    "newsletter": browser.storage.managed.get("newsletter"),
    "chat": browser.storage.managed.get("chat"),
    "related": browser.storage.managed.get("related"),
    "linked": browser.storage.managed.get("linked")
}

const hideSelectors = {
    "hot": ["div#hot-network-questions"],
    "jobs": ["div#hireme", "div._jobs", "div.everyonelovesstackoverflow"],
    "meta": ["div.community-bulletin"],
    "newsletter": ["div#newsletter-ad"],
    "chat": ["div#chat-feature"],
    "related": ["div.sidebar-related"],
    "linked": ["div.sidebar-linked"]
}

function hide() {
    hideSettings.keys().forEach(settingKey => {
        if(hideSettings[settingKey]) {
            hideSelectors[settingKey].forEach(selector => {
                elements = document.querySelectorAll(selector)
                elements.forEach(function(element) {
                    element.style.display = "none"
                })
            })
        }
    })

}
