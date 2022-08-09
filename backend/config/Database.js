import sequelize from "sequelize";

const db = new sequelize('db_auth', 'root', 'root', {
    host: "localhost",
    dialect: "mysql",
    port: "3306"
});

export default db;
