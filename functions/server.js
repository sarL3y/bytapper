const express = require('express');
const serverless = require('serverless-http');

const gmailHelpers = require('./support/gmail.js');

const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);

router.post('/', function(req, res) {
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

// No need for app.listen() with Lammbda functions
// app.listen(port, console.log(`Listening on port: ${port}`));

module.exports = app;
module.exports.handler = serverless(app);
