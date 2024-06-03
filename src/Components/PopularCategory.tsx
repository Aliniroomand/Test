import  { useState } from 'react';
import { Link } from 'react-router-dom';
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


  
  const PopularCategory = () => {
    const [active, setActive] = useState({
      Chicken: false,
      Fries: false,
      Hamber: true, 
      Noodle: false,
      Pizza: false,
      Sandwich: false,
    });
    const handleClick = (i) => {
      setActive({[i.target.id]:true});
    }  
    return (
      <section className='absolute w-[670px] h-[179px] top-[357px] left-[60px]'>
        <h1 className='text-secondary2'>Popular Category</h1>
        <section className='flex flex-row '>
            <Link 
              to='' onClick={handleClick} className='w-[100px] h-[150px] bg-secondary1 grid place-items-center rounded-full mx-3' id='Chicken' >
              <img className=' w-[54px] h-[54px]'  src={`${active.Chicken ? activeChicken : deactiveChicken }`} id='Chicken' alt="Chicken part" />  
            </Link>
            
            <Link 
              to='' onClick={handleClick} className='bg-secondary1 grid place-items-center rounded-full mx-3 w-[100px] h-[150px]' id='Fries' >
              <img className='w-[54px] h-[54px]' src={`${active.Fries ? activeFries : deactiveFries }`} id='Fries' alt="Fries part" />  
            </Link>
            
            <Link 
              to='' onClick={handleClick} className='bg-secondary1 grid place-items-center rounded-full mx-3 w-[100px] h-[150px]' id='Hamber' >
              <img className='w-[54px] h-[54px]' src={`${active.Hamber ? activeHamber : deactiveHamber }`} id='Hamber' alt="Hamber part" />  
            </Link>
            
            <Link 
              to='' onClick={handleClick} className='bg-secondary1 grid place-items-center rounded-full mx-3 w-[100px] h-[150px]' id='Noodle' >
              <img className='w-[54px] h-[54px]' src={`${active.Noodle ? activeNoodle : deactiveNoodle }`} id='Noodle' alt="Noodle part" />  
            </Link>
            
            <Link 
              to='' onClick={handleClick} className='bg-secondary1 grid place-items-center rounded-full mx-3 w-[100px] h-[150px]' id='Pizza' >
              <img className='w-[54px] h-[54px]' src={`${active.Pizza ? activePizza : deactivePizza }`} id='Pizza' alt="Pizza part" />  
            </Link>
            
            <Link 
              to='' onClick={handleClick} className='bg-secondary1 grid place-items-center rounded-full mx-3 w-[100px] h-[150px]' id='Sandwich' >
              <img className='w-[54px] h-[54px]' src={`${active.Sandwich ? activeSandwich : deactiveSandwich }`} id='Sandwich' alt="Sandwich part" />  
            </Link>
            
          </section>
      </section>
    );
  };

  
  export default PopularCategory;