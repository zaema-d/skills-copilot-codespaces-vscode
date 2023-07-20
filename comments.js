//create web server
const express = require('express');
const app = express();

//import the mysql connection
const mysql = require('../db/connection');

//import the middleware
const middleware = require('../middleware');

//import the comment model
const Comment = require('../models/comment');

//import the user model
const User = require('../models/user');

//import the post model
const Post = require('../models/post');

//import the comment router
const commentRouter = express.Router();

//get all comments
commentRouter.get('/', middleware.isLoggedIn, (req, res) => {
    Comment.getAllComments((err, comments) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all comments. Error: ${err}` });
        } else {
            res.write(JSON.stringify({ success: true, comments: comments }, null, 2));
            res.end();
        }
    });
});

//get all comments of a post
commentRouter.get('/post/:postId', middleware.isLoggedIn, (req, res) => {
    Comment.getAllCommentsOfPost(req.params.postId, (err, comments) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all comments. Error: ${err}` });
        } else {
            res.write(JSON.stringify({ success: true, comments: comments }, null, 2));
            res.end();
        }
    });
});

//get all comments of a user
commentRouter.get('/user/:userId', middleware.isLoggedIn, (req, res) => {
    Comment.getAllCommentsOfUser(req.params.userId, (err, comments) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all comments. Error: ${err}` });
        } else {
            res.write(JSON.stringify({ success: true, comments: comments }, null, 2));
            res.end();
        }
    });
});

//get all comments of a user
commentRouter.get('/user/:userId/post/:postId', middleware.isLoggedIn, (req, res) => {
    Comment.getAllCommentsOfUserOnPost(req.params.userId, req.params.postId, (err, comments) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all comments. Error: ${err}` });
        } else {
            res.write(JSON.stringify({ success: true, comments: comments }, null, 2));
const express = require('express');
const app = express();

//import the mysql connection
const mysql = require('../db/connection');

//import the middleware
const middleware = require('../middleware');

//import the comment model
const Comment = require('../models/comment');

//import the user model
const User = require('../models/user');

//import the post model
const Post = require('../models/post');

//import the comment router
const commentRouter = express.Router();

//get all comments
commentRouter.get('/', middleware.isLoggedIn, (req, res) => {
    Comment.getAllComments((err, comments) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all comments. Error: ${err}` });
        } else {
            res.write(JSON.stringify({ success: true, comments: comments }, null, 2));
            res.end();
        }
    });
});

//get all comments of a post
commentRouter.get('/post/:postId', middleware.isLoggedIn, (req, res) => {
    Comment.getAllCommentsOfPost(req.params.postId, (err, comments) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all comments. Error: ${err}` });
        } else {
            res.write(JSON.stringify({ success: true, comments: comments }, null, 2));
            res.end();
        }
    });
});

//get all comments of a user
commentRouter.get('/user/:userId', middleware.isLoggedIn, (req, res) => {
    Comment.getAllCommentsOfUser(req.params.userId, (err, comments) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all comments. Error: ${err}` });
        } else {
            res.write(JSON.stringify({ success: true, comments: comments }, null, 2));
            res.end();
        }
    });
});

//get all comments of a user
commentRouter.get('/user/:userId/post/:postId', middleware.isLoggedIn, (req, res) => {
    Comment.getAllCommentsOfUserOnPost(req.params.userId, req.params.postId, (err, comments) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all comments. Error: ${err}` });
        } else {
            res.write(JSON.stringify({ success: true, comments: comments }, null, 2));