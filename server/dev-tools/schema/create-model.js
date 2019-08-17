require('dotenv').config();
const path = require('path');
const db = require('../../config/database-connection');
const schemaName = process.argv[2];
const QueryFile = require('pg-promise').QueryFile;
const sqlFilePath = path.join(__dirname, 'sql', `create-${schemaName}.sql`);
const query = new QueryFile(sqlFilePath, {minify: true});

(async() => {
    try {

        const queryResults = await db.any(query, {});
        console.log(queryResults);
    }
    catch (err) {
        console.error(err);
    }
}) ();