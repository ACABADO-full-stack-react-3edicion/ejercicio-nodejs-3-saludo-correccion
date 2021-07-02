const { program } = require("commander");
const chalk = require("chalk");
const { guardarSaludo } = require("./utilidades/archivos");

program.option("--nombre <nombre>", "Tu nombre");
program.parse(process.argv);
const { nombre } = program.opts();

if (!nombre) {
  console.log(chalk.yellow("No me has dicho cómo te llamas."));
  process.exit(0);
}

guardarSaludo(nombre);
