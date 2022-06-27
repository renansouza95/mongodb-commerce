db.produtos.find({ $and: [
    { "valoresNutricionais.tipo": "proteĩnas" },
    { "valoresNutricionais.percentual": { $gte: 30, $lte: 40 } },
  ] },
  { _id: 0, nome: 1 });