const mysql = require("mysql");
const cors = require("cors");
const express = require("express");
const app = express();
const puerto = 3000;

app.use(express.json());
app.use(cors());

//Cadena de conexion a MySQL
const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "lavanderia_data",
  port: 3306,
});

//Conectamos a la base de datos
conexion.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Conexion a la base de datos exitosa");
  }
});

//Activamos el servidor
app.listen(puerto, () => {
  console.log("Servidor activo desde http://localhost:3000");
});

//Primera ruta de acceso
app.get("/", (req, res) => {
  res.send("Bienvenido a Node js");
});
