import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import SearchPart from '../Components/SearchPart';
import PopularCategory from '../Components/PopularCategory';
import RecentlyPreOrders from '../Components/RecentlyPreOrders';
import ImagesPart from '../Components/ImagesPart';

const LandingPage = () => {
    return (
        <main className=' relative w-[1380px] h-[831px] top-[33px] left-[30px] rounded-[30px] '>
         <Header/>  
         {/* <Outlet/> */}
         <section>
            <SearchPart/>
            <PopularCategory/>
            <RecentlyPreOrders/>
            <ImagesPart/>
         </section>
        </main>
    );
};

export default LandingPage;