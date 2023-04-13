import React, { useState } from "react";
import { Input } from "../UI/input/Input";
import "./ModalOpen.css";
import { Button } from "../UI/button/Button";

export const ModalOpen = ({ openModalHendler, setModal, addMovies }) => {
  const [inpunNameText, setInputNameText] = useState("");
  const [inpunUrlText, setInputUrlText] = useState("");
  const [inpunRating, setInputRating] = useState("");

  const getInputNameValue = (e) => {
    setInputNameText(e.target.value);
  };

  const getInputUrlValue = (e) => {
    setInputUrlText(e.target.value);
  };

  const getInputRatingValue = (e) => {
    setInputRating(e.target.value);
  };

  const addMovie = (event) => {
    event.preventDefault();

    const product = {
      id: Date.now().toString(),
      title: inpunNameText,
      img: inpunUrlText,
      rating: inpunRating,
    };

    localStorage.setItem("items", JSON.stringify(product));
    addMovies(product);

    console.log(product);
    setInputNameText("");
    setInputUrlText("");
    setInputRating("");
    setModal(false);
  };

  return (
    <div className="ModalLabel">
      <form>
        <label>
          Movie title:
          <Input value={inpunNameText} onChange={getInputNameValue} />
        </label>
        <label>
          Image URL:
          <Input
            type={"url"}
            value={inpunUrlText}
            onChange={getInputUrlValue}
          />
        </label>
        <label>
          Your Rating:
          <Input
            type="number"
            value={inpunRating}
            onChange={getInputRatingValue}
          />
        </label>
        <div style={{ display: "flex", gap: "50px" }}>
          <Button
            color="blue"
            width="90px"
            height="35px"
            onClick={openModalHendler}
          >
            Cancel
          </Button>
          <Button
            color="white"
            width="90px"
            height="35px"
            bgColor="blue"
            onClick={addMovie}
          >
            ADD
          </Button>
        </div>
      </form>
    </div>
  );
};
