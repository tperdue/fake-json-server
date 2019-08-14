const path = require('path');

// base paths 
const applicatonRoot = path.join(__dirname, '..');
const clientRoot = path.join(__dirname, '..', '..', 'client');


// server paths

exports.controllersPath = path.join(applicatonRoot, 'controllers');
exports.modelsPath = path.join(applicatonRoot, 'models');
exports.routesPath = path.join(applicatonRoot, 'routes');
exports.viewsPath = path.join(applicatonRoot, 'views');



// client paths

exports.cssPath = path.join(clientRoot, 'css');
exports.jsPath = path.join(clientRoot, 'js');
exports.imgPath = path.join(clientRoot, 'img');
