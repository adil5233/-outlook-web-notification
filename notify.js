// Add check for notification access.
if (Notification.permission !== 'granted') {
    Notification.requestPermission();
 }

function showNotification() {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    } else {
        const options = {
            body: document.querySelector("div > div > div > div > div._2l2rlI1lryU9nyNZ77G2yv > div > span").innerText,
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


function checkCount() {

    try {
        t1 = document.querySelector("div > div > div > div > div > div > div > div > div > div > div > div > div:nth-child(1) > div > span > span > span").innerText;
        mail_cont = parseInt(t1);
    }
    
    catch(err) {
       mail_cont = 0;
    }

    if (mail_cont > 0) {
        console.log(mail_cont);
        var msg = new SpeechSynthesisUtterance('incoming mail' + mail_cont);
        window.speechSynthesis.speak(msg);
        showNotification();
    }
    
}

javascript: ! function () {

setInterval(() => {

    checkCount();
    
}, 20000);


}();
