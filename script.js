const boton=document.getElementById("boton")
const parrafo=document.getElementById("parrafo")
        
const callAPI= () => {
    fetch('https://pokeapi.co/api/v2/pokemon/magikarp')
    .then(res=> res.json())
    .then((data) => {parrafo.innerText=JSON.stringify(data.name)});
};

boton.addEventListener('click', callAPI);





