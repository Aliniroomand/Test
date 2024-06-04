import { Link } from 'react-router-dom';


// images
import yellowBG from '../assets/Images/RightBG.png';
import frontberger from '../assets/Images/frontBerger.png';
import backberger from '../assets/Images/BackBerger.png';
import fingerUp from "../assets/Images/White-in-Jumper.png"


const ImagesPart = () => {
    return (
        <section className='absolute left-[780px]'>
            <img src={yellowBG} alt="yellowBG" />
            <img className='absolute top-[242px]  z-20 HamberAnimation' src={frontberger} alt="frontberger" />
            <img className='absolute top-[242px] z-10 ' src={backberger} alt="backberger" />
            <section className='absolute right-10 flex justify-between flex-row w-1/2 bottom-4'>
                <Link to="" className=' hover:scale-125 z-40 transition-all' >Applications</Link>
                <Link to="" className=' hover:scale-125 z-40 transition-all' >Privacy</Link>
                <Link to="" className=' hover:scale-125 z-40 transition-all' >Terms</Link>
            </section>
            <img className='absolute top-[264px] z-30 fingerAnimation' src={fingerUp} alt="fingerUp" />
        </section>
    );
};



export default ImagesPart;