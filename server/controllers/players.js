const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
const path = require('path');
const jsonDir = path.join(__dirname, '..', 'json-data');

exports.getAll = async (req, res) => {
    const rawContents = await readFile(path.join(jsonDir, 'players.json'), 'utf8');
    const data = JSON.parse(rawContents);
    res.json(data);
}