const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
 Comment.findall({})
 .then(dbCommentData => res.json(dbCommentData))
 .catch(err) => {
    console.log(Err);
    res.status(500).json(err);
 };
 })