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
  console.log("O tambien desde http://192.168.1.8:3000");
});

//Primera ruta de acceso
app.get("/", (req, res) => {
  res.send("Bienvenido a Node js");
});

//Consulta de toda la tabla de ventas
app.get("/api/ventas", (req, res) => {
  conexion.query("SELECT * FROM Ventas", (error, filas) => {
    if (error) {
      throw error;
    } else {
      res.send(filas);
    }
  });
});

//Consulta a un cliente en especifico
app.get("/api/ventas/:id", (req, res) => {
  conexion.query(
    "SELECT * FROM Ventas WHERE id = ?",
    [req.params.id],
    (error, filas) => {
      if (error) {
        throw error;
      } else {
        res.send(filas);
      }
    }
  );
});

//Borramos una venta
app.delete("/api/ventas/:id", (req, res) => {
  conexion.query(
    "DELETE FROM Ventas WHERE id = ?",
    [req.params.id],
    (error, filas) => {
      if (error) {
        throw error;
      } else {
        res.send(filas);
      }
    }
  );
});

//Agregamos una nueva venta
app.post("/api/ventas", (req, res) => {
  const venta = {
    cliente: req.body.cliente,
    pieza: req.body.pieza,
    servicio: req.body.servicio,
    telefono: req.body.telefono,
    recibido: req.body.recibido,
    entrega: req.body.entrega,
    precio: req.body.precio,
  };
  const sql = "INSERT INTO Ventas SET ?";
  conexion.query(sql, venta, (error, filas) => {
    if (error) {
      throw error;
    } else {
      res.send(filas);
    }
  });
});

//Actualizar una venta
app.put("/api/ventas/:id", (req, res) => {
  const id = req.params.id;
  const cliente = req.body.cliente;
  const pieza = req.body.pieza;
  const servicio = req.body.servicio;
  const telefono = req.body.telefono;
  const recibido = req.body.recibido;
  const entrega = req.body.entrega;
  const precio = req.body.precio;
  const sql =
    "UPDATE Ventas SET cliente = ?, pieza = ?, servicio = ?, telefono = ?, recibido = ?, entrega = ?, precio = ? WHERE id = ?";
  conexion.query(
    sql,
    [cliente, pieza, servicio, telefono, recibido, entrega, precio, id],
    (error, filas) => {
      if (error) {
        throw error;
      } else {
        res.send(filas);
      }
    }
  );
});
