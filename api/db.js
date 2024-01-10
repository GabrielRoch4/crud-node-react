// Importando o mysql
import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
}); 