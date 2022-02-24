// Add check for notification access.
if (Notification.permission !== 'granted') {
    Notification.requestPermission();
}

notify = true;
temp = document.querySelectorAll("._3qXS6Uo8WFxax_lDWr_1a_")[0].getElementsByClassName("NsB53xFTU532cgP0ztFSC")[0].valueOf("div").id;

function showNotification() {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    } else {
        const options = {
            body: document.querySelector("div > div > div > div > div._2l2rlI1lryU9nyNZ77G2yv > div > span").innerText,
            dir: 'ltr',
            icon: 'https://w7.pngwing.com/pngs/186/789/png-transparent-mail-outlook-com-microsoft-outlook-microsoft-exchange-server-microsoft-teams-save-outlook-blue-text-logo-thumbnail.png',
            requireInteraction: true,
        };
        const notification = new Notification('Outlook Mail', options);
        notification.onclick = function () {
            window.open('https://example.com');
        };
    }
}

function checkCount() {

    temp2 = document.querySelectorAll("._3qXS6Uo8WFxax_lDWr_1a_")[0].getElementsByClassName("NsB53xFTU532cgP0ztFSC")[0].valueOf("div").id;

    if (temp !== temp2) {
        showNotification();
        temp=temp2;
    } 
}

javascript: ! function () {

setInterval(() => {
    checkCount();
}, 8000);

}();
