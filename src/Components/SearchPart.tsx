import locationLogo from '../assets/Images/search part/location.svg'
import recBG from '../assets/Images/rectangleBG.svg'
import inputBG from '../assets/Images/search part/inputBG.svg'


const SearchPart = () => {
    return (
    <section className='absolute top-[180px] left-[62px]'>

    <section className=" relative w-[539px] h-[108px] flex flex-col ">
        <section className='flex flex-row justify-between items-center w-[339px] h-[24px] '>
            <img src={locationLogo} alt="locationLogo" />
            <h3 className=" text-base font-normal border-r-[1px] pr-1">My Location</h3>  
            <h3 className=" text-base font-normal ">New York, <span className=' text-accent1'>Left Side Blue Door</span></h3>  
        </section>

        <section className='relative w-full h-[70px] flex flex-row'>
            <input type="text" placeholder="Search..." className="rounded-md px-10 w-[510px] h-[70px] focus:outline-none" style={{background: `url(${inputBG})`}} />
            <button className="absolute grid place-items-center right-0 w-[161px] h-[70px] text-white hover:scale-110 transition-all" >
                <img className='absolute z-10' src={recBG} alt="recBG" />
                <h1 className='absolute z-20' >
                Search
                </h1>
            </button>
    </section>


        </section>
    </section>

    );
};

export default SearchPart;