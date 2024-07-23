const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Darko74:Darecar23081995@cluster0.n4xdqhm.mongodb.net/Biblioteka?retryWrites=true&w=majority&appName=Cluster0"
);

const Book = require("./models/biblioteka");

async function run() {
  try {
    // const newBook = new Book({
    //   title: "Lord of the Rings",
    //   author: "John R. R. Tolkien",
    //   genre: "High fantasy, Adventure",
    //   available: true,
    //   publishedDate:"1954", 
    // });

    // await newBook.save();

    // await Book.deleteOne({ _id: "669fe5ca7fd6b0e1c0ec44c5" });

    // const books = await Book.find();
    // console.log(books);

    // await Book.updateOne(
    //   { _id: "669fe001508d3783cb618732" },
    //   { publishedDate: new Date("07-29-1954") }
    // );

    // const updatedBooks = await Book.find();
    // console.log("Updated books:", updatedBooks);

  } catch (err) {
    console.error(err.message);
    throw err;
  }
}

run();

