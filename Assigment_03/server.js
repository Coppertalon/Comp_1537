const { application } = require("express");
const app = express();

application.listen(5000, (err) => {
    if (err) console.log(err);
    console.log("server is running on port 5005")
});

app.get('/', (req, res) => {
    res.send("hello world");
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost: 27017/test',
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