var hideSettings = {
    "hot": true,
    "jobs": true,
    "meta": true,
    "newsletter": true,
    "chat": true,
    "related": true,
    "linked": true
}

const hideSelectors = {
    "hot": ["div#hot-network-questions"],
    "jobs": ["div#hireme", "div._jobs"],
    "meta": ["div.community-bulletin"],
    "newsletter": ["div#newsletter-ad"],
    "chat": ["div#chat-feature"],
    "related": ["div.sidebar-related"],
    "linked": ["div.sidebar-linked"]
}

function hide() {
    let hot = browser.storage.sync.get("hot");
    let jobs = browser.storage.sync.get("jobs");
    let meta = browser.storage.sync.get("meta");
    let newsletter = browser.storage.sync.get("newsletter");
    let chat = browser.storage.sync.get("chat");
    let related = browser.storage.sync.get("related");
    let linked = browser.storage.sync.get("linked");
    hot.then((res) => { 
        hideSettings.hot = res.hot ? true : false 
        jobs.then((res) => { 
            hideSettings.jobs = res.jobs ? true : false 
            meta.then((res) => { 
                hideSettings.meta = res.meta ? true : false 
                newsletter.then((res) => { 
                    hideSettings.newsletter = res.newsletter ? true : false
                    chat.then((res) => { 
                        hideSettings.chat = res.chat ? true : false
                        related.then((res) => { 
                            hideSettings.related = res.related ? true : false
                            linked.then((res) => { 
                                hideSettings.linked = res.linked ? true : false
                                Object.keys(hideSettings).forEach(settingKey => {
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
                        })
                    })
                })
            })
        })
    })
}

hide()