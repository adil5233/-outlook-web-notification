// Add check for notification access.
function showNotification() {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    } else {
        const options = {
            body: document.querySelector("div > div > div > div > div._26iAJd-QwDtChfxfbDGH7F > div > span").innerText,
            dir: 'ltr',
            image: 'todo.jpg',
            requireInteraction: true,
        };
        const notification = new Notification('Outlook Mail', options);
        notification.onclick = function () {
            window.open('https://www.example.com');
        };
    }
}


function delay() {

    return new Promise((resolve, reject) => {

        setTimeout(resolve, 800);

    });

}

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

javascript: ! function () {

var timer = 40000;

setInterval(function () {

    (async () => {

        t1 = document.querySelector("div > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(1) > div > span > span > span").innerText;
        mail_cont = parseInt(t1);

        await delay();

        if (mail_cont > 0) {

            console.log(mail_cont);

            var msg = new SpeechSynthesisUtterance('incoming mail' + mail_cont);

            window.speechSynthesis.speak(msg);
            showNotification();

        }

    })();

}, timer);

}();
