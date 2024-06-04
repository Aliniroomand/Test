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



type CategoryState = {
  Chicken: boolean;
  Fries: boolean;
  Hamber: boolean;
  Noodle: boolean;
  Pizza: boolean;
  Sandwich: boolean;
};
  
  const PopularCategory = () => {
    const [active, setActive] = useState<CategoryState>({
      Chicken: false,
      Fries: false,
      Hamber: true, 
      Noodle: false,
      Pizza: false,
      Sandwich: false,
    });
    
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      const { id } = e.currentTarget;
      setActive({
        Chicken: false,
        Fries: false,
        Hamber: false,
        Noodle: false,
        Pizza: false,
        Sandwich: false,
        [id]: true,
      });
    };
    return (
      <section className='absolute w-[670px] h-[179px] top-[357px] left-[60px]'>
        <h1 className='text-secondary2'>Popular Category</h1>
        <section className='flex flex-row '>
            <Link 
              to='' onClick={handleClick} className='w-[100px] h-[150px] bg-secondary1 grid place-items-center rounded-full mx-3 group' id='Chicken' >
              <img className=' w-[54px] h-[54px] group-hover:scale-125 transition-all'  src={`${active.Chicken ? activeChicken : deactiveChicken }`} id='Chicken' alt="Chicken part" />  
            </Link>
            
            <Link 
              to='' onClick={handleClick} className='bg-secondary1 grid place-items-center rounded-full mx-3 w-[100px] h-[150px] group' id='Fries' >
              <img className='w-[54px] h-[54px] group-hover:scale-125 transition-all' src={`${active.Fries ? activeFries : deactiveFries }`} id='Fries' alt="Fries part" />  
            </Link>
            
            <Link 
              to='' onClick={handleClick} className='bg-secondary1 grid place-items-center rounded-full mx-3 w-[100px] h-[150px] group' id='Hamber' >
              <img className='w-[54px] h-[54px] group-hover:scale-125 transition-all' src={`${active.Hamber ? activeHamber : deactiveHamber }`} id='Hamber' alt="Hamber part" />  
            </Link>
            
            <Link 
              to='' onClick={handleClick} className='bg-secondary1 grid place-items-center rounded-full mx-3 w-[100px] h-[150px] group' id='Noodle' >
              <img className='w-[54px] h-[54px] group-hover:scale-125 transition-all' src={`${active.Noodle ? activeNoodle : deactiveNoodle }`} id='Noodle' alt="Noodle part" />  
            </Link>
            
            <Link 
              to='' onClick={handleClick} className='bg-secondary1 grid place-items-center rounded-full mx-3 w-[100px] h-[150px] group' id='Pizza' >
              <img className='w-[54px] h-[54px] group-hover:scale-125 transition-all' src={`${active.Pizza ? activePizza : deactivePizza }`} id='Pizza' alt="Pizza part" />  
            </Link>
            
            <Link 
              to='' onClick={handleClick} className='bg-secondary1 grid place-items-center rounded-full mx-3 w-[100px] h-[150px] group' id='Sandwich' >
              <img className='w-[54px] h-[54px] group-hover:scale-125 transition-all' src={`${active.Sandwich ? activeSandwich : deactiveSandwich }`} id='Sandwich' alt="Sandwich part" />  
            </Link>
            
          </section>
      </section>
    );
  };

  
  export default PopularCategory;