import { c_argv } from "./config/yargs";
import { crearTabla } from "./helpers/multiplicar";

console.clear();

const { b, l, h } = c_argv;

crearTabla(b, l, h)
  .then((archivo) => console.log(archivo, "creado."))
  .catch((err) => console.log(err));
