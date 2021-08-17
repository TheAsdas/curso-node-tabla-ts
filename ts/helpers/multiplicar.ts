import { writeFileSync } from "fs";
import colors from "colors";

export const crearTabla = async (
  base: number,
  listar: boolean,
  hasta: number
) => {
  try {
    if (base === 69) throw new Error(`Base is ${base}: Nice.`);
    if (base === 420) throw new Error(`Base is ${base}: Blaze it.`);

    const separador = "================================\n";
    const titulo = `          Tabla del ${base}\n`;

    let salida = separador + titulo + separador;
    let entradas = Array<string>();

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      entradas.push(
        colors.white(base.toString()) +
          colors.red.bold(" x ") +
          colors.white(i.toString()) +
          colors.red.bold(" = ") +
          colors.yellow((i * base).toString() + "\n")
      );
    }

    writeFileSync(`./output/tabla-${base}.txt`, salida);

    if (listar) {
      console.log(
        colors.rainbow(separador) +
          colors.yellow.bold(titulo) +
          colors.rainbow(separador) +
          entradas.join("")
      );
    }

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};
