import React from "react";
import "tachyons";
import "./items.css";

const RecipeItems = ({ image, title, cal, ingredients }) => {
  return (
    <div className="card-body grow tc">
        <h1 className="f4 tc">{title}</h1>
        <hr className="mw3 bb bw1 b--black-10"></hr>
        <ol className='list'>
          {ingredients.map((x) => (
            <li>👉 {x.text}</li>
          ))}
        </ol>
        <p className='tc pt2 pb2'>total calories 🔥  {cal}</p>
        <img
          src={image}
          alt=""
          className="br-100 h4 b--black-05 pa2"
        />
    </div>
  );
};

export default RecipeItems;
