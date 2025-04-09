// Put this inside tampermonkey 4chanX

const notifyPageInterval = 10000;
const pageNotification = 10;

if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

function notifyPage() {
    const pageCountEl = document.getElementById("page-count");
    if (!pageCountEl) return;

    const currentPage = parseInt(pageCountEl.textContent.trim(), 10);
    if (currentPage === pageNotification && Notification.permission === "granted") {
        new Notification("⚠️ Thread on Page 10", {
            body: "This thread is on page 10 and might be pruned soon.",
            icon: "https://static.4chan.org/image/favicon.ico"
        });
    }
}

setInterval(notifyPage, notifyPageInterval);
