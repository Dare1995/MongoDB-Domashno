const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Darko74:Darecar23081995@cluster0.n4xdqhm.mongodb.net/Recepti?retryWrites=true&w=majority&appName=Cluster0"
);

const Recipe = require("./models/recepti");

async function run() {
  try {
    // const newRecipe = new Recipe({
    //   title: "Apple Pie",
    //   ingredients: [
    //     { name: "Apples", quantity: "840 grams" },
    //     { name: "Lemon Juice", quantity: "15 ml" },
    //     { name: "Large Egg", quantity: "1" },
    //     { name: "Flour", quantity: "30 grams" },
    //   ],
    //   instructions: "Preheat the oven to 400°F (204°C). Adjust your oven rack to the lower third position. In a bowl, combine apples with lemon juice. Roll out the dough and place it in the pie dish. Fill with apple mixture, then top with additional dough if desired. Bake for 45-50 minutes until the crust is golden brown and the filling is bubbling."
    // });

    // await newRecipe.save();
   
  // await Recipe.deleteOne({ _id: "669fe5ca7fd6b0e1c0ec44c5" });

    const recipes = await Recipe.find();
    console.log(recipes);

    await Recipe.updateOne(
        { _id: "669fee9431804e72c4090efa" },
        { $set: { title: "Updated Apple Pie", "ingredients.0.quantity": "900 grams" } } // Example updates
      );

      const updatedRecipes = await Recipe.find();
      console.log("Updated recipes:", updatedRecipes);

  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

run();