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

        }

    })();

}, timer);

}();
