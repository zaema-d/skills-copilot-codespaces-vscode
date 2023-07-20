//create web server
const express = require("express");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//routes
app.use('/api/comments', require('./routes/api/comments'));

//start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));