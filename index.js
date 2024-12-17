const express = require('express')
const engine = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const route = require('./routes');

//Database connect!
const db = require('./config/db');
db.connect();

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
//method-overide
app.use(methodOverride('_method'))

//Morgan
app.use(morgan('combined'));
// Static file
app.use(express.static("./src/public"));

// express handlebars
app.engine('.hbs', engine.engine({
    extname: '.hbs',
    //cau hinh phep cong
    helpers: {
        sum: (a, b) => a + b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

//Routes init

route(app);

//
app.listen(port, () => console.log('Begin at: http://127.0.0.1:'+port))