const { database: dbconfig } = require('./env');
const { host, user: username, pass: password, name: database } = dbconfig

module.exports = {
    dialect: 'mysql',
    host,
    username,
    password,
    database,
    define: {
        timestamps: true,
        underscored: true
    }
}

// docker run --name gamabank -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=mysql -e MYSQL_DATABASE=gamabank -e MYSQL_USER=mysql -e MYSQL_PASSWORD=mysql mysql:5.7
// docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:5.7