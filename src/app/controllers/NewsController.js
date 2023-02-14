class NewsController {
    // [GET] /news
    index(req, res){
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('NEWS DETAIL');
    }

    // [GET] /news/contact
    contact(req, res) {
        res.send('NGUYEN VAN QUYET');
    }
}


module.exports = new NewsController;