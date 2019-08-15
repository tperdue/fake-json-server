const applicationPaths = require('./application-paths');
const path = require('path');
const exphbs = require('express-handlebars');
const viewsPath = applicationPaths.viewsPath;
const partialsPath = path.join(viewsPath, 'partials');
const layoutsPath = path.join(viewsPath, 'layouts');

module.exports = (app) => {
    app.engine('handlebars', exphbs({
        layoutsDir: layoutsPath,
        partialsDir: partialsPath,
        defaultLayout: 'main'
    }));
    app.set('view engine', 'handlebars');
    app.set('views', viewsPath)

}