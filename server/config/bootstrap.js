const express = require('express');
const applicationPaths = require('./application-paths');



module.exports = (app) => {

    app.use('/css', express.static(applicationPaths.cssPath));
    app.use('/js', express.static(applicationPaths.jsPath));
    app.use('/img', express.static(applicationPaths.imgPath));

}