import websiteScraper from "website-scraper";
const wurl = 'https://ec.cemcnj.org/';

websiteScraper({
    urls: [wurl],
    urlFilter: function(url) {
        return url.indexOf(wurl) == 0;
    },
    recursive: true,
    maxDepth: 50,
    prettifyUrls: true,
    filenameGenerator: 'bySiteStructure',
    directory: './node-website',
}).then((data) => {
    console.log("Web Scrape Successful!");
}).catch((err) => {
    console.log(err);
});