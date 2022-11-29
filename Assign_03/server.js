const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();

app.listen(5000, (err) => {
    if (err) console.log(err);
    console.log("server is running on port 5005")
});

app.get('/', (req, res) => {
    res.send("hello world");
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/test',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) console.log(err);
        console.log("connected")
    }
);

const unicornsSchema = new mongoose.Schema({
    name: String,
    dob: Date,
    loves: [String],
    weight: Number,
    gender: {
        type: String,
        enum: ['m', 'f']
    },
    vampires: Number,
    vaccinated: Boolean
});

const unicornModel = mongoose.model("unicorns", unicornsSchema);

app.get('/unicorns', (req, res) => {
    unicornModel.find({}, (err, data) => {
        if (err) console.log(err);
        res.send(data);
    });
});

app.use(express.urlencoded());
app.use(express.json());
app.post('/getUnicornsByNameRoute', (req, res) => {
    console.log(req.body);
    unicornModel.find({ name: req.body.unicornNameInHTTPBody }, (err, data) => {
        if (err) console.log(err);
        res.send(data);
    });
});

app.use(express.static('./public'));