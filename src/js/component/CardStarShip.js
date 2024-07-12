import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardStarship = ({ name, uid }) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="col">
        <div className="card-group">
          <div className="card">
            <img
              loading="lazy" 
              width={"600px"} 
              height={"400px"} 
              src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`}
              onError={(e) => {
                console.log(e);
                e.target.src = "../img-alterna.png"; 
              }}
              className="card-img-top img-fluid"
              alt={`${name} Starship`} 
            />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <Link to={`/card-detail-starships/${uid}`}>
                <a href="#" className="btn btn-white border-color me-2">
                  Leer mas 
                </a>
              </Link>
              <button
                className="btn btn-danger border-color"
                onClick={() => actions.addFavorite(uid, name)}
              >
                <i
                  className={
                    store.favorites.find((favorite) => favorite.id == uid)
                      ? "fa-solid fa-heart" 
                      : "fa-regular fa-heart" 
                  }
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardStarship;