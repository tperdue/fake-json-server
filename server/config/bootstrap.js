const express = require('express');
const applicationPaths = require('./application-paths');
const cors = require('cors');



module.exports = (app) => {

    require('./setup-view-engine')(app);

    app.use('/css', express.static(applicationPaths.cssPath));
    app.use('/js', express.static(applicationPaths.jsPath));
    app.use('/img', express.static(applicationPaths.imgPath));
    app.use(cors());
    require('./application-routes')(app);

}