const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb';

// Database Name
const dbName = 'maxblog';

// Use connect method to connect to the server
MongoClient.connect(url, {useNewUrlParser: true },function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
});