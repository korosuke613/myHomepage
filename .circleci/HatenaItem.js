'use strict'

const genarateGA = (kind, title) => {
    return `ga('send', 'event', 'link', '${kind}\', '${title}\')`;
};

module.exports = class HatenaItem{
    constructor(day, title, href) {
        this.day = day;
        this.title = title;
        this.href = href;
        this.ga = genarateGA("hatena", title)
    }
}