// const querystring = require("querystring");
// const {Curl} = require("node-libcurl");

const https = require('https');

const projectId = '2DBANLQn7hrUUpcJH4txsjAKNKK';
const projectSecret = 'a73163527f7255218c1d5e056f6a18fc';


const options = {
    host: 'ipfs.infura.io',
    port: 5001,
path : '/api/v0/pin/add?arg=QmdevTs1cxSxgWj2wb7xRySfHuWtEMJ8W4BitHxHyQDCGi',

    method: 'POST',
    auth: projectId + ':' + projectSecret
};

let req = https.request(options, (res) => {
    let body = '';
    res.on('data', function (chunk) {
        body += chunk;
    });
    res.on('end', function () {
        console.log(body);
    });
});
req.end();

