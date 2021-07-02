const path = require("path");
const fs = require("fs");
const chalk = require("chalk");

const guardarSaludo = (nombre) => {
  const saludo = `Hola, ${nombre}. Encantado de saludarte.`;
  const archivo = path.join("textos", "saludo.txt");
  fs.writeFile(archivo, saludo, (err) => {
    if (err) {
      console.log(chalk.red.bold(`No he podido grabar el archivo ${archivo}.`));
      process.exit(1);
    }
  });
};

module.exports = {
  guardarSaludo,
};
