import Loader from './Loader';
import Parser from './Parser';
import View from './View';

export default class Ticker {
    constructor() {
        this.feedUrl = 'json/messages.json';

        this.loader = new Loader();
        this.parser = new Parser();
        this.view = new View();
    }

    tick() {
        this.loader.load(this.feedUrl).then(json => {
            this.view.render(this.parser.parse(json));
        }).catch((error) => {
            console.log(error);
        });
    }
}