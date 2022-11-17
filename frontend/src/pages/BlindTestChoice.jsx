import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Title from "../components/btchoice/Title";

import ButtonContainer from "../components/btchoice/ButtonContainer";
import "../style/BlindTestChoice.css";
import ButtonContainerOT from "../components/btchoice/ButtonContainerOT";

const years = [
  {
    name: "1960 & 1970",
    id: "button1",
  },
  {
    name: 1980,
    id: "button2",
  },
  {
    name: 1990,
    id: "button3",
  },
  {
    name: 2000,
    id: "button4",
  },
  {
    name: 2010,
    id: "button5",
  },
];

const kind = [
  {
    name: "rock",
    id: "button6",
  },
  {
    name: "pop",
    id: "button7",
  },
  {
    name: "film",
    id: "button8",
  },
  {
    name: "rap",
    id: "button9",
  },
  {
    name: "electro",
    id: "button10",
  },
];

 const ourChoice = [
   {
     name: "Daddy C.",
   },
   {
     name: "Jeremy",
   },
   {
     name: "Valentin",
   },
   {
     name: "Matthieu",
   },
   {
     name: "Dani",
   },
 ];


function BlindTestChoice({
  setGenreChoice,
  genreChoice,
  setAnneeChoice,
  anneeChoice,
  listChoice,
})
{

  

  return (
    <div className="test-selection">
      <Title />
      <div className="section">
        <div className="music-filter">
          <ButtonContainer
            array={years}
            choice={anneeChoice}
            setChoice={setAnneeChoice}
          />
          <ButtonContainer
            array={kind}
            choice={genreChoice}
            setChoice={setGenreChoice}
          />
        </div>

        <div className="our-tests">
          <ButtonContainerOT array={ourChoice}/>
        </div>
      </div>

      <div className="buttons-downside">
<<<<<<< HEAD
           {listChoice.length >= 4 ? (
=======
        <Toggle />

        {listChoice.length >= 5 ? (
>>>>>>> 160a9e48f80096c63f0d25755bac39b711683846
          <button type="button" className="send">
            <Link to="/test">GO !</Link>
          </button>
        ) : null}
      </div>
    </div>
  );
}

BlindTestChoice.propTypes = {
  setGenreChoice: PropTypes.func.isRequired,
  setAnneeChoice: PropTypes.func.isRequired,

  genreChoice: PropTypes.arrayOf(
    PropTypes.shape([
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
    ])
  ).isRequired,
  anneeChoice: PropTypes.arrayOf(
    PropTypes.shape([
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ])
  ).isRequired,
  listChoice: PropTypes.string.isRequired,
};

export default BlindTestChoice;
