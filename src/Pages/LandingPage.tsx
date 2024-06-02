import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const LandingPage = () => {
    return (
        <main className=' relative w-[1380px] h-[831px] top-[33px] left-[30px] rounded-[30px] '>
         <Header/>  
         <Outlet/>
        </main>
    );
};

export default LandingPage;