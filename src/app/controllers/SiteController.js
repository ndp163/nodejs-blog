class SiteController {
    index(req, res) {
        res.render("index");
    }
    search(req, res) {
        console.log(req.query.q);
        res.render("search");
    }
}

module.exports = new SiteController();
