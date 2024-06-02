import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import SearchPart from '../Components/SearchPart';

const LandingPage = () => {
    return (
        <main className=' relative w-[1380px] h-[831px] top-[33px] left-[30px] rounded-[30px] '>
         <Header/>  
         {/* <Outlet/> */}
         <section>
            <SearchPart/>
         </section>
        </main>
    );
};

export default LandingPage;