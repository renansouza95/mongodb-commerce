// db.produtos.find({
//   $and: [
//     { "valoresNutricionais.tipo": "proteínas" },
//     { "valoresNutricionais.percentual": { $gte: 30, $lte: 40 } },
//   ] },
//   { _id: 0, nome: 1 });

// https://stackoverflow.com/questions/14040562/how-to-search-in-array-of-object-in-mongodb

db.produtos.find({
  valoresNutricionais: { $elemMatch: { tipo: "proteínas", percentual: { $gte: 30, $lte: 40 } } },
}, { _id: 0, nome: 1 });