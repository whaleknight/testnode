// var myModule = require("./my-module.js")
// console.log(myModule.str)
// str = 'Hello World!';
// console.log('asdfgfgds');

// var message = "";

// promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         message += "suck";
//         resolve(message);
//     }, 2000)
// })

// promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         message += " my";
//         resolve(message);
//     }, 2000)
// })

// promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         message += " dick";
//         resolve(message);
//     }, 2000)
// })

// var printResult = (results) => {console.log("Results = ", results, "message = ", message)}

// function main() {
//     // See the order of promises. Final result will be according to it
//     Promise.all([promise1, promise2, promise3]).then(printResult);
//     Promise.all([promise2, promise1, promise3]).then(printResult);
//     Promise.all([promise3, promise2, promise1]).then(printResult);
//     console.log("\"\"" + message);
// }

// main();
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.post('/submit-data', function (req, res) {
    res.send('POST Request');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
