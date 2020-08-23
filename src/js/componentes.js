import '../css/componentes.css';

const saludar = (nombre) => {
  console.log('Creando etiqueta')

  const h1 = document.createElement('h1');
  h1.innerText = `Que tal, soy ${nombre}`

  document.body.append(h1)
}

export {
  saludar
}
