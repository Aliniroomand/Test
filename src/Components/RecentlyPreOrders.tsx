
// images
import recentlyPreOrders from '../assets/Images/recently pre orders/recentlyOrders.png'
import kingbergerLogo from "../assets/Images/recently pre orders/kingbergerLogo.png"
import { Link } from 'react-router-dom';

const RecentlyPreOrders = () => {
    return (
        
        <main className='absolute top-[585px] left-[65px]'> 
{/*container*/}

        <h1 className=' text-secondary2'>Recently Pre Orders</h1>

        <section className='flex flex-row'>
{/* Image Parts */}
    {/* Image Part1 */}
            <Link to="" className='flex flex-row items-end justify-start w-[298px] h-[184px] mx-4' style={{background:`url(${recentlyPreOrders})`}}>
                    <section className=' flex flex-row items-center p-6'> 
                    <img className='w-[44px] h-[44px]' src={kingbergerLogo} alt="kingbergerLogo" />

                    <section className='top-[160px] left-[34px] px-3'>
                        <section className='text-[#F2F2F2]'>
                            <h3>King Burger</h3>
                            <p>Rate 8/10</p>
                        </section>
                    </section>
                </section>
            </Link>
    {/*_______Image Part1_______*/}

    {/*Image Part2 */}
            <Link  to="" className='flex flex-row items-end justify-start w-[298px] h-[184px] ' style={{background:`url(${recentlyPreOrders})`}}>
                    <section className=' flex flex-row items-center p-6'> 
                    <img className='w-[44px] h-[44px]' src={kingbergerLogo} alt="kingbergerLogo" />

                    <section className='top-[160px] left-[34px] px-3'>
                        <section className='text-[#F2F2F2]'>
                            <h3>King Burger</h3>
                            <p>Rate 8/10</p>
                        </section>
                    </section>
                </section>
            </Link>
    {/*_______Image Part2____________ */}

        </section>
{/*____container______ */}
        </main>

    );
};

export default RecentlyPreOrders;