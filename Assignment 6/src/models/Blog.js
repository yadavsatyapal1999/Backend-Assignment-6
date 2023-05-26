const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here
    name:{type:String ,required:true},
    profession:{type:String,required:true}
})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;