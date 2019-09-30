const express = require('express');
const serverless = require('serverless-http');

const gmailHelpers = require('./gmail.js');

const app = express();
// const port = process.env.PORT || 3000;

app.use(express.json());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.post('/submitForm', function(req, res) {
    const messageOptions = {
        from: req.body.email,
        to: 'bytapper@gmail.com',
        subject: `${req.body.name} (${req.body.company}) contacting you from ${req.body.email}`,
        html: req.body.message,
    };
     
    gmailHelpers.sendEmail(messageOptions)
        .then(() => {
            res.sendStatus(200);
        });
});

// Spin it up
// app.listen(port, console.log(`Listening on port: ${port}`));

module.exports.handler = serverless(app);
