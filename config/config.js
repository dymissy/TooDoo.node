/**
 * TooDoo Configuration
 *
 * NODE_ENV=production node index.js
 *
 * @type {exports|*}
 */

var path = require('path'),
    config;

config = {
    development: {
        url: 'http://localhost',

        database: {
            client    : 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/toodoo-dev.db')
            },
            debug     : false
        },
        server  : {
            host: '127.0.0.1',
            port: '8081'
        }
    },

    production: {
        url     : 'http://localhost',
        database: {
            client    : 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/toodoo.db')
            },
            debug     : false
        },
        server  : {
            host: '127.0.0.1',
            port: '8081'
        }
    }
};

// Export config
module.exports = config;
