import { useState } from "react";

import BookCard from "../ui/BookCard";

import "./BookItem.css";
import ReadDate from "../books/ReadDate";

const Bookitem = ({
  author,
  title,
  dateRead,
  pageCount,
  readingProgress,
  rating,
}) => {
  const [newTitle, setNewTitle] = useState("");

  const clickHandler = () => {
    console.log("click");
    setNewTitle("Leido!");
  };

  return (
    <BookCard className="book-item-container">
      <h2>{title}</h2>
      {<h2>{newTitle}</h2>}
      <h3> Autor: {author} </h3>
      <ReadDate dateRead={dateRead} />
      <p> {pageCount} Paginas</p>

      <div>
        <button onClick={clickHandler}>Marcar como Leido </button>
      </div>
      <div>
        {readingProgress ? (
          <div>
            <p> El progreso de lectura es : {readingProgress + "%"}</p>
          </div>
        ) : undefined}

        {rating ? (
          <div>
            <p> las estrellas son: {rating}</p>
          </div>
        ) : undefined}
      </div>
    </BookCard>
  );
};

export default Bookitem;
