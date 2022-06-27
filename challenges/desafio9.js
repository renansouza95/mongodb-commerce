// db.produtos.find({
//   $and: [
//     { "valoresNutricionais.tipo": "calorias" },
//     { "valoresNutricionais.quantidade": { $lt: 500 } },
//   ] },
//   { _id: 0, nome: 1 });

// https://stackoverflow.com/questions/14040562/how-to-search-in-array-of-object-in-mongodb

db.produtos.find({
  valoresNutricionais: { $elemMatch: { tipo: "calorias", quantidade: { $lt: 500 } } },
}, { _id: 0, nome: 1 });