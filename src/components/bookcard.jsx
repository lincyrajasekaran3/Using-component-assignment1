// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white max-w-sm">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-semibold mt-2">{name}</h2>
      <p className="text-gray-700">Genre: {genre}</p>
      <p className="text-gray-600">Author: {author}</p>
    </div>
  );
};

export default BookCard;
