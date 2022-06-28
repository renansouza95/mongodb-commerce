// https://www.mongodb.com/docs/manual/reference/operator/projection/slice/#mongodb-projection-proj.-slice

db.produtos.find({
  ingredientes: { $in: ["picles"] } },
  { _id: 0, nome: 1, ingredientes: 1, valoresNutricionais: { $slice: 3 } });