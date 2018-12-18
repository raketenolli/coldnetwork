function saveOptions(e) {
  browser.storage.sync.set({
    hot: document.querySelector("hot").checked,
    jobs: document.querySelector("jobs").checked,
    meta: document.querySelector("meta").checked,
    newsletter: document.querySelector("newsletter").checked,
    chat: document.querySelector("chat").checked,
    related: document.querySelector("related").checked,
    linked: document.querySelector("linked").checked
  });
  e.preventDefault();
}
document.querySelector("form").addEventListener("submit", saveOptions);

function restoreOptions() {
    let hot = browser.storage.managed.get("hot");
    let jobs = browser.storage.managed.get("jobs");
    let meta = browser.storage.managed.get("meta");
    let newsletter = browser.storage.managed.get("newsletter");
    let chat = browser.storage.managed.get("chat");
    let related = browser.storage.managed.get("related");
    let linked = browser.storage.managed.get("linked");
    document.getElementById("hot").checked = hot
    document.getElementById("jobs").checked = jobs
    document.getElementById("meta").checked = meta
    document.getElementById("newsletter").checked = newsletter
    document.getElementById("chat").checked = chat
    document.getElementById("related").checked = related
    document.getElementById("linked").checked = linked
}
document.addEventListener('DOMContentLoaded', restoreOptions);