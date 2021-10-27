const path = require('path');
const express = require('express')
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes/index')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine('hbs', handlebars({
      extname: '.hbs'
}));  
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//route init
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 