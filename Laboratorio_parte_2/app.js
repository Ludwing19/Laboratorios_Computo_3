/*
const readline = require("readline"),
  fs = require("fs"),
  leer = "Libros.txt";

let lector = readline.createInterface({
  input: fs.createReadStream(leer),
});

lector.on("line", (linea) => {
  console.log("", linea);
});*/



var fs = require("fs");
var stringify = require("csv-stringify");

//json de datos


var data = [
  {
    Libro: "El Principito",
    Idioma: "Español",
    Reflexión: "Sentimientos, Esperanza",
  },
  {
    Libro: "Pinocho",
    Idioma: "English y Español",
    Reflexión: "Respeto y Amistado",
  },
  {
    Libro: "Cenicienta",
    Idioma: "English y Aleman",
    Reflexión: "Amistad y Trabajo domestico",
  },
  {
      Libro: "El Pulgarcito",
    Idioma: "Español y Russo",
    Reflexión: "Astusia y Inteligecia",
  },
];

stringify.stringify(
  data,
  {
    header: true,
  },
  function (err, output) {
    fs.writeFileSync(__dirname + "/Libros.txt", output);
  }
);


