const User = require('./user');
const Blog = require('./blog');
const Comment = require('./comment')

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
}); //a user can have multiple blogs

User.hasMany(Comment, {
  foreignKey: 'user_id'
}) // a user can make multiple comments

Blog.belongsTo(User, {
  foreignKey: 'user_id'
}); // but the blog can only belong to one user.

Blog.hasMany(Comment, {
  foreignKey: 'comment_id'
}) //the blog will have multiple comments.

Comment.belongsTo(User, {
  foreignKey: 'user_id'
}); // a comment belongs to one user 

Comment.belongsTo(Blog, {
  foreignKey: 'comment_id'
});





module.exports = { User, Blog, Comment };
