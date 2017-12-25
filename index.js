const express = require('express');
const moment = require('moment');

const app = express();

app.get('/api/timestamp/', function (req, res) {
    const date = new Date();
    res.json({
        "unix": date.getTime(),
        "utc": date.toUTCString(),
    });
  });

app.get('/api/timestamp/:date_string', function (req, res) {
    const date = new Date(req.originalUrl.slice(15));
    var dateForValidation = moment(date, 'YYYY-MM-DD');
    if (dateForValidation.isValid()) {
        res.json({
            "unix": date.getTime(),
            "utc": date.toUTCString(),
        });
    } else {
        res.json({
            "error": "Invalid Date",
        });
    }
});

app.listen(3000);

