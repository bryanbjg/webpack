import '../css/componentes.css';

export const saludar = (nombre) =>{
    console.log('Creando h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre} the best coder`;

    document.body.append(h1);
}
