const express = require('express');
const applicationPaths = require('./application-paths');



module.exports = (app) => {

    require('./setup-view-engine')(app);

    app.use('/css', express.static(applicationPaths.cssPath));
    app.use('/js', express.static(applicationPaths.jsPath));
    app.use('/img', express.static(applicationPaths.imgPath));

    require('./application-routes')(app);

}