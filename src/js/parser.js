import Message from './Message'

export default class Parser {
    constructor() {
        this.messages = new Set();
    }

    parse(json) {
        if (this.isInvalidFeed(json)) {
            return [];
        }
        const messagesFromFeed = json.sportart.tickertxt.message;

        this.messages.clear();
        messagesFromFeed.forEach((messageDetails, key) => {
            this.messages.add(this.parseMessage(messageDetails));
        });
        return Array.from(this.messages);
    }

    isInvalidFeed(json) {
        return typeof json.sportart === 'undefined' ||
            typeof json.sportart.tickertxt === 'undefined' ||
            typeof json.sportart.tickertxt.message === 'undefined' ||
            typeof json.sportart.tickertxt.message.length === 'undefined';
    }

    parseMessage(details) {
        let message = new Message();

        message.id = details.id;
        message.time = details.time;
        message.messageType = details.messageType;
        message.sportsType = details.sportart;
        message.sportsTypeId = details.sportartId;
        message.title = details.title;
        message.text = details.text;

        return message;
    }
}