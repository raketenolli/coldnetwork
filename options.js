function saveOptions(e) {
    browser.storage.sync.set({ 
        hot: document.getElementById("hot").checked,
        jobs: document.getElementById("jobs").checked,
        meta: document.getElementById("meta").checked,
        newsletter: document.getElementById("newsletter").checked,
        chat: document.getElementById("chat").checked,
        related: document.getElementById("related").checked,
        linked: document.getElementById("linked").checked
    });
    e.preventDefault();
}
document.querySelector("form").addEventListener("submit", saveOptions);

function restoreOptions() {
    let hot = browser.storage.sync.get("hot");
    let jobs = browser.storage.sync.get("jobs");
    let meta = browser.storage.sync.get("meta");
    let newsletter = browser.storage.sync.get("newsletter");
    let chat = browser.storage.sync.get("chat");
    let related = browser.storage.sync.get("related");
    let linked = browser.storage.sync.get("linked");
    hot.then((res) => { document.getElementById("hot").checked = res.hot ? true : false })
    jobs.then((res) => { document.getElementById("jobs").checked = res.jobs ? true : false })
    meta.then((res) => { document.getElementById("meta").checked = res.meta ? true : false })
    newsletter.then((res) => { document.getElementById("newsletter").checked = res.newsletter ? true : false })
    chat.then((res) => { document.getElementById("chat").checked = res.chat ? true : false })
    related.then((res) => { document.getElementById("related").checked = res.related ? true : false })
    linked.then((res) => { document.getElementById("linked").checked = res.linked ? true : false })
}
document.addEventListener('DOMContentLoaded', restoreOptions);