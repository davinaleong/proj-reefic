const countDownDate = new Date(Date.UTC(2021, 6, 1, 10, 0, 0)).getTime();
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $(".days").text(days);
    $(".hours").text(hours);
    $(".minutes").text(minutes);
    $(".seconds").text(seconds);
}, 500);