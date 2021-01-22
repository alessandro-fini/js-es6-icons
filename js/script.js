/* Aggiungere i colori ad ogni categoria: blue per gli animali, orange per i vegetali e viola per gli utenti. Prendete i colori da un altro array.
Stampare poi tutte le icone utilizzando il template literal.
Stampare quindi nella select tutti i tipi che avete in precedenza selezionato (animal, vegetable, icon).
Filtrare i risultati in base alla categoria (ricordate di svuotare il container). */

$(document).ready(function () {

  let icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    }
  ];
  const colors = ['blue', 'orange', 'purple'];
  
  /* array filtrati in base al tipo */
  let animals = typeFilter(icons, 'animal');
  let vegetables = typeFilter(icons, 'vegetable')
  let users = typeFilter(icons, 'user');
  
  /* aggiunta della proprietà colore */
  animals = addColor(animals, colors[0]);
  vegetables = addColor(vegetables, colors[1]);
  users = addColor(users, colors[2]);

  console.log(animals);
  console.log(vegetables);
  console.log(users);

  /* unione degli array */
  icons = [...animals, ...vegetables, ...users];
  
  console.log(icons);

  /* stampa a schermo dell'array */
  icons.forEach((e, i) => {
    const {name, color, prefix, family} = e;

    $('#box-container').append(
      `
      <div class="box">
        <i class="${family} ${prefix}${name}" style="color: ${color};"></i>
        <p>${name.toUpperCase()}</p>
      </div>
      `
      );
  });

  /* inserimento delle option nella select */
  const typeArray = [];

  icons.forEach((e) => {
    if (!typeArray.includes(e.type)) {
      typeArray.push(e.type);
    }
  });
  
  typeArray.forEach((e) => {
    $('#select-type').append(
      `
      <option value="${e}">${e}</option>
      `
      );
  });
  

});

/* funzioni */
function typeFilter (array, value) {
  const result = array.filter((e) => e.type == value);
  return result;
}

function addColor (array, data) {
  const result = array.map((e) => {
    return {...e, color: data}
  })
  return result;
}