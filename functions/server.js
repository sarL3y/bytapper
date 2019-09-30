const express = require('express');
const serverless = require('serverless-http');

const gmailHelpers = require('./support/gmail.js');

const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
// const port = process.env.PORT || 3000;

// app.use(express.json());
app.use(bodyParser.json());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use('/.netlify/functions/server', router);

router.post('/test', (req, res) => res.json({ postBody: req.body }));

router.post('/submitForm', function(req, res) {
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

module.exports = app;
module.exports.handler = serverless(app);
