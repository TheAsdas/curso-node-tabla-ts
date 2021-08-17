import yargs from "yargs";

export const c_argv = yargs
  .option("b", {
    alias: "base",
    type: "number",
    default: 5,
    describe: "La base en qué crear la tabla de multiplicación.",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    default: false,
    describe: "Mostrar la tabla antes de guardarla en el archivo.",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Hasta qué punto se debe multiplicar.",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) throw "Base tiene que ser un múmero.";
    if (isNaN(argv.h)) throw "El límite tiene que ser un número.";
    return true;
  })
  .parseSync();
