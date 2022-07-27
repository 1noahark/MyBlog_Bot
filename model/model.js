const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    username: String,
    blogpost: String
})

module.exports = mongoose.model("blog", BlogSchema)