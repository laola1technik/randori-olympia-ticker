import Ticker from './Ticker';

const onLoad = function () {
    const ticker = new Ticker();

    ticker.tick();
    setInterval(() => {
        ticker.tick();
    }, 10*1000);
};

document.addEventListener("DOMContentLoaded", onLoad);