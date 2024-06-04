import React from 'react';
import { Link } from 'react-router-dom';

//Images
import logo from "../assets/Images/logoWithName.svg"
import ShoppingCart from '../assets/Images/ShoppingCart.svg'
import recBG from '../assets/Images/rectangleBG.svg'
import hamberMenu from '../assets/Images/categoriesLogo.svg'
import contactUsLogo from '../assets/Images/contactUsLogo.svg'
import SocialMedias from './SocialMedias';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed flex flex-row justify-between items-center w-[1260px] h-[84px] top-[36px] left-[60px] font-bold z-50 bg-[#ffffff1d] rounded-full backdrop-blur-xl">
{/* section for logo & categories & contact &social Medias */}
            <section className=' w-3/6 flex flex-row justify-between items-center'>
                <Link to="/">
                <img  src={logo} alt="logo" />
                </Link>
                <Link to="categories" className=" flex flex-row text-textColor hover:text-accent2 transition-all hover:scale-110">
                    <img  src={hamberMenu} alt="hamberMenu" />
                    <h3>
                    Categories
                    </h3>
                </Link>
                <Link to="contactUs" className="flex flex-row text-textColor hover:text-accent2 hover:scale-110 transition-all">
                    <img src={contactUsLogo} alt="contactUsLogo" />
                    <h3>
                    Contact Us
                    </h3>
                </Link>
{/* Social Medias  */}
                <SocialMedias/>
{/*_______Social Medias______*/}
        </section>
{/*__________section for logo & categories & contact & social Medias_________*/}


{/*section for Account and Shopping Cart*/}
        <section className=' w-1/6 flex items-center justify-around '>
            <Link className=' hover:scale-125 transition-all' to="shoppingCart">
            <img src={ShoppingCart} alt="shopping cart" />
            </Link>
            <Link to="account" className=" grid place-items-center transition-all text-white hover:text-2xl hover:text-accent3 w-[171px] h-[70px] text-base" style={{background: `url(${recBG})` , backgroundSize:"cover"}}>
                Account
            </Link>
        </section>
{/*__________section for Account and Shopping Cart_________*/}
    </header>
  );
};

export default Header;
