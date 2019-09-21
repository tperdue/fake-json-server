const routesPath = require('./application-paths').routesPath;
const path = require('path');

const loadRouter = (routerName) => {
    const routerPath = path.join(routesPath, routerName);
    return require(routerPath);
}

module.exports = (app) => {

    app.use('/', loadRouter('pages'));
    app.use('/players', loadRouter('players'));
}