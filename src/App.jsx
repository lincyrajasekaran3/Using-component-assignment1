// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import BookCard from "./components/bookcard"; // Import the BookCard component

function App() {
  const books = [
    {
      id: 1,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.IIIPIPZYMBOJgxFfWGRtBAHaHa&rs=1&pid=ImgDetMain",
      name: "The Great Adventure",
      genre: "Fiction",
      author: "Jane Doe",
    },
    {
      id: 2,
      image: "https://i.thenile.io/r1000/9781496687197.jpg?r=6085750d133cf",
      name: "Mysteries of the Universe",
      genre: "Science",
      author: "John Smith",
    },
    {
      id: 3,
      image: "https://images3.penguinrandomhouse.com/cover/9781933771106",
      name: "History Revisited",
      genre: "Non-Fiction",
      author: "Emily Johnson",
    },
    {
      id: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1700317474i/202368563.jpg",
      name: "Culinary Delights",
      genre: "Cooking",
      author: "Michael Brown",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Digital Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            image={book.image}
            name={book.name}
            genre={book.genre}
            author={book.author}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
