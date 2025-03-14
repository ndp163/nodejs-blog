const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, required: true },
        content: { type: String },
        videoId: { type: String, maxLengh: 255 },
        slug: { type: String, slug: "name", unique: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
