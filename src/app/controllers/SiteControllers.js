class SiteControllers{

    //[GET]/Home
    Home(req,res){
        res.render('C:/Users/GearVn/Desktop/learning node/Node basic/src/resources/views/index.hbs')
    }
    Search(req,res){
        res.render('search')
    }

}

module.exports = new SiteControllers