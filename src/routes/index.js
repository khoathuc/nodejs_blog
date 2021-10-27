const newRouter = require('./news.route')
const siteRouter = require('./site.js')
const equipmentRouter = require('./equipments')
function route(app){
    app.post('/',equipmentRouter)
    app.use('/',siteRouter)
    app.use('/news',newRouter);
    app.get('/news',(req,res) => {
        res.render('new')
    });
    app.use('/news',newRouter);
}

module.exports = route;