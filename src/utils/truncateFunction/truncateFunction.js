// esta funcion lo que hace es cortar texto dependiendo de la longitud de este
// y sustituyendolo por ... para dar un mejor efecto en los posts o cualquier texto

//// necesita dos parametros uno que es el string que se va a recortar
//// y otro que es la longitud del tamaño del texto
export const truncate = (str, length = '100') => {
  if (str.length >= length) {
    return str.length > 10 ? str.substring(0, length) + '...' : str;
  } else {
    return str + '';
  }
};
