let number = 1;
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const pesquisa = document.querySelector('#pesquisa');
const input = document.querySelector('#input');
const imgPoke = document.querySelector('#img-pokemon');
const namePoker = document.querySelector('#name');
const type = document.querySelector('#type');

async function getPokemon(pokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await response.json();

    number = data.id;
    type.innerHTML = `tipo: ${data.types[0].type.name}`;
    namePoker.innerHTML = `nome: ${data.name}`;
    imgPoke.src = data['sprites'].front_default;
    imgPoke.alt = data.name;
}

getPokemon('1')

pesquisa.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (input.value === '') {
        return;
    }

    await getPokemon(input.value);
    input.value = '';
})


prev.addEventListener('click', async () => {
    if (number !== 1) {
        number = number - 1;
        await getPokemon(`${number}`);
    }
})

next.addEventListener('click', async () => {
    number = number + 1;
    await getPokemon(`${number}`);
})


