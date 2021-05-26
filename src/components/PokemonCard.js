import React from "react";
import styled from "styled-components";

const PokemonCardStyled = styled.div`
  background-color: #ecf0f1;
  min-width: 200px;
  text-align: center;
  border: 3px solid #3498db;
  border-radius: 8px;
  display: inline-block;
  margin: 15px;
  transition: transform, box-shadow;
  transition-duration: 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px 1px rgb(0, 0, 0, 0.1);
  }
`;

const PokemonCard = ({
  pokemon,
  listOfClickedPokemon,
  setListOfClickedPokemon,
  setCurrentScore,
  currentScore,
  bestScore,
  setBestScore,
}) => {
  const { name: clickedPokemonName, spriteURL } = pokemon;

  const onPokemonCardClick = () => {
    const indexOfClickedPokemon = listOfClickedPokemon.indexOf(
      clickedPokemonName
    );

    if (indexOfClickedPokemon < 0) {
      setListOfClickedPokemon([...listOfClickedPokemon, clickedPokemonName]);
      setCurrentScore(currentScore + 1);

      if (currentScore + 1 > bestScore) {
        setBestScore(currentScore + 1);
      }
    } else {
      setListOfClickedPokemon([]);
      setCurrentScore(0);
    }
  };

  return (
    <PokemonCardStyled onClick={onPokemonCardClick} className="pokemon-card">
      <img
        width="200"
        src={`${spriteURL}`}
        alt={`${clickedPokemonName}`}
        key={`${clickedPokemonName}`}
      />
    </PokemonCardStyled>
  );
};

export default PokemonCard;
