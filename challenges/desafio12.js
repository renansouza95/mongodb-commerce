db.produtos.updateMany(
  { $and: [
    { nome: { $ne: "McChicken" } },
    { ingredientes: { $nin: ["ketchup"] } },
  ] },
  { $push: { 
    ingredientes: "ketchup",
  } },
);

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });