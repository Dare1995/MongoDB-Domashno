const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Darko74:Darecar23081995@cluster0.n4xdqhm.mongodb.net/Avtomobili?retryWrites=true&w=majority&appName=Cluster0"
);

const Car = require("./models/avtomobili");

async function run() {
  try {
    // const newCar = new Car({
    //   maker: "Golf",
    //   model: "6",
    //   year: 2015,
    //   color: "Black",
    //   price: 14000,
    //   available: true
    // });

    // await newCar.save();

    // await Car.deleteOne({ _id: "669fe5ca7fd6b0e1c0ec44c5" });

    // const Cars = await Car.find();
    // console.log(Cars);

    await Car.updateOne(
      { _id: "669ff5867e14148f100ceb4d" },
      { price: "16000" }
    );

    const updatedCars = await Car.find();
    console.log("Updated Cars:", updatedCars);

  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

run();
