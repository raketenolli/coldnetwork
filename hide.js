var hideSettings = {
    "hot": true,
    "jobs": true,
    "meta": true,
    "newsletter": true,
    "chat": true,
    "sidebarWidgets": true,
    "related": true,
    "linked": true
}

const hideSelectors = {
    "hot": ["div#hot-network-questions"],
    "jobs": ["div#hireme", "div._jobs"],
    "meta": ["div.community-bulletin"],
    "newsletter": ["div#newsletter-ad"],
    "chat": ["div#chat-feature"],
    "sidebarWidgets": ["div.s-sidebarwidget"],
    "related": ["div.sidebar-related"],
    "linked": ["div.sidebar-linked"]
}

function hide() {
    let settingKeys = Object.keys(hideSettings)
    settings = browser.storage.sync.get(settingKeys)
    settings.then(settings => {
        settingKeys.forEach(settingKey => { 
            hideSettings[settingKey] = settings[settingKey] ? true : false
            if(hideSettings[settingKey]) {
                hideSelectors[settingKey].forEach(selector => {
                    elements = document.querySelectorAll(selector)
                    elements.forEach(function(element) {
                        element.style.display = "none"
                    })
                })
            }
        })
    })
}

hide()