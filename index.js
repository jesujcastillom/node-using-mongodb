import express from 'express';
import bodyParser from 'body-parser';
mongoose.Promise = global.Promise;

const app = express();
const PORT = 4000;
const connection = mongoose.connect('mongodb://localhost/productsdb')

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
