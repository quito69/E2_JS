const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

console.log('------------------ ejercicio a ------------------');

// a)  Las pizzas que tengan un id impar.

console.log('Las pizzas que tengan un id impar son:');
const idImpar = (pizas) => pizas.filter((piza) => {
  if (piza.id % 2 === 1) {
    console.log(`${[piza.nombre]} ID: ${[piza.id]}`);
  };
});
  
idImpar(pizzas);

console.log('------------------ ejercicio b ------------------');

// b) Responder: ¿Hay alguna pizza que valga menos de $600?

console.log('La pizza que vale menos de $600 es');

const pizzaBarata = (pizas) => pizas.find((piza) => {
  if (piza.precio < 600) {
    console.log(`${[piza.nombre]} - Precio: $${[piza.precio]}.-`);
  };
});

pizzaBarata(pizzas);

console.log('------------------ ejercicio c ------------------');

// c) El nombre de cada pizza con su respectivo precio.

console.log('- Lista de Precios -');

const nombrePrecio = (pizas) => {
  pizas.forEach((piza) => {
    console.log(`${piza.nombre}: $${piza.precio}.-`);
  });
};

nombrePrecio(pizzas);

console.log('------------------ ejercicio d ------------------');

// d) Todos los ingredientes de cada pizza
// (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo).
// Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas
// tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

console.log('- Lista de Pizzas y sus Ingredientes -');

const ingrePizza = (pizas) => {
  pizas.forEach((piza1) => {
    console.log(`${piza1.nombre}:`);
    piza1.ingredientes.forEach((piza2) => {
      console.log(`${piza2}`);
    });
    console.log('--------------------');
  });
};

ingrePizza(pizzas);

