let countdown = setInterval(function () {
    document.querySelectorAll('.countdown').forEach(function (CD) {
        const now = new Date()
        const targetTime = new Date(CD.getAttribute("data-target-time"))
        const realTime = targetTime - now

        CD.querySelectorAll('.targetTime')[0].textContent = targetTime;

        if (realTime < 0) return true

        const day = Math.floor(realTime / 1000 / 60 / 60 / 24)
        const hour = Math.floor(realTime / 1000 / 60 / 60) % 24
        const min = Math.floor(realTime / 1000 / 60) % 60
        const sec = Math.floor(realTime / 1000) % 60
        const msec = Math.floor(realTime / 10) % 60

        CD.querySelectorAll('.day')[0].textContent = day;
        CD.querySelectorAll('.hour')[0].textContent = hour;
        CD.querySelectorAll('.min')[0].textContent = min;
        CD.querySelectorAll('.sec')[0].textContent = sec;
        CD.querySelectorAll('.msec')[0].textContent = msec;
    });
}, 0)