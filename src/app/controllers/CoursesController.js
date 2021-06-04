const Course = require("../models/Course");

class CoursesController {
    index(req, res, next) {
        Course.find({})
            .then((courses) => res.render("courses", { courses }))
            .catch(next);
    }
    detail(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render("courses/detail", { course });
            })
            .catch(next);
    }
    create(req, res, next) {
        res.render("courses/create");
    }
    createPost(req, res, next) {
        Course.create(req.body)
            .then(() => res.redirect("/courses"))
            .catch(next);
    }
    edit(req, res, next) {
        Course.findOne({ _id: req.params.id })
            .then((course) => res.render("courses/edit", { course }))
            .catch(next);
    }
    editPut(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then((course) => res.redirect("/courses"))
            .catch(next);
    }
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next);
    }
}

module.exports = new CoursesController();
