/* Aggiungere i colori ad ogni categoria: blue per gli animali, orange per i vegetali e viola per gli utenti. Prendete i colori da un altro array.
Stampare poi tutte le icone utilizzando il template literal.
Stampare quindi nella select tutti i tipi che avete in precedenza selezionato (animal, vegetable, icon).
Filtrare i risultati in base alla categoria (ricordate di svuotare il container). */

$(document).ready(function () {

  const icons = [
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
  let animals = icons.filter((e) => e.type == 'animal');
  let vegetables = icons.filter((e) => e.type == 'vegetable');
  let users = icons.filter((e) => e.type == 'user');
  
  /* aggiunta della proprietà colore in un array duplicato */
  animals = animals.map((e) => {
    return {...e, color: colors[0]}
  })

  vegetables = vegetables.map((e) => {
    return {...e, color: colors[1]}
  })

  users = users.map((e) => {
    return {...e, color: colors[2]}
  })

  console.log(animals);
  console.log(vegetables);
  console.log(users);


  

});