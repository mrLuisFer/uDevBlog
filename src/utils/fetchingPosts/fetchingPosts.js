// Esto llama a la API y retorna la funcion que le pasemos para setear el estado con la informacion
export async function fetchingPosts(setState) {
  const res = await fetch('http://localhost:4000/home');
  let data = [];
  data = await res.json();

  setState(data);
}
