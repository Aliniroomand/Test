import React, { useState } from 'react';
//Images
import activeChicken from "../assets/Images/popular category/activechicken.svg" 
import deactiveChicken from "../assets/Images/popular category/deactivechicken.svg" 
import deactiveFries from "../assets/Images/popular category/deactivefries.svg" 
import activeFries from "../assets/Images/popular category/activefries.svg" 
import deactiveHamber from "../assets/Images/popular category/deactivehamber.svg" 
import activeHamber from "../assets/Images/popular category/activehamber.svg" 
import deactiveNoodle from "../assets/Images/popular category/deactivenoodle.svg" 
import activeNoodle from "../assets/Images/popular category/activenoodle.svg" 
import deactivePizza from "../assets/Images/popular category/deactivepizza.svg" 
import activePizza from "../assets/Images/popular category/activepizza.svg" 
import deactiveSandwich from "../assets/Images/popular category/deactivesandwich.svg" 
import activeSandwich from "../assets/Images/popular category/activesandwich.svg" 


// Images
const images = {
    pizza: { active: activePizza, inactive: deactivePizza },
    chicken: { active: activeChicken, inactive: deactiveChicken },
    fries: { active: activeFries, inactive: deactiveFries },
    hamber: { active: activeHamber, inactive: deactiveHamber },
    noodle: { active: activeNoodle, inactive: deactiveNoodle },
    sandwich: { active: activeSandwich, inactive: deactiveSandwich },
  };
  
  const PopularCategory = () => {
    const [active, setActive] = useState({
      chicken: false,
      fries: false,
      hamber: true, 
      noodle: false,
      sandwich: false,
      pizza: false,
    });
  
    const handleClick = (category) => {
    
    };
  
    const categoryIcons = Object.entries(images).map(([categoryId, imageObj]) => (
      <button
        key={categoryId}
        className={`category-icon ${active[categoryId] ? 'active' : ''}`}
        onClick={() => handleClick(categoryId)}
      >
        <img src={active[categoryId] ? imageObj.active : imageObj.inactive} alt={categoryId} />
      </button>
    ));
  
    return (
      <section>
        <h1>Popular Category</h1>
        <div className="category-icons">{categoryIcons}</div>
      </section>
    );
  };
  
  export default PopularCategory;