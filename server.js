const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const port = 3000

app.use('/views', express.static(path.join(__dirname, 'static')));

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended:false }))

app.get('/', (req, res) => {
    res.render('index', { text : '', error: false })
});

app.post('/', (req, res) => {
    const body = req.body;

    if(body.text != '0123456789'){
        res.render('index', { text : body.text, error: true });
    } else {
        res.render('success', { text : body.text })
    }

})

app.listen(port, () => {
    console.log(`The application listening at port ${port}`)
})