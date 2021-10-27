class NewsController{
    
    // [GET]/news
    index(req,res){
        res.render('new')
    }
    show(req,res){
        console.log(req.params.slug)
        res.send(`Content: ${req.params.slug}`)
    }
}


module.exports = new NewsController;