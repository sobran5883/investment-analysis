import { NavLink } from 'react-router-dom';
import bg1 from '../assets/home/bg1.png'
import bg2 from '../assets/home/bg2.png'
import animation from '../assets/home/animation.gif'
import growth from '../assets/home/growth.png'
const Home=()=>{
    return(
        <div className='w-full bg-[#211E32] h-fit flex flex-col items-center'>
            <div className='w-full relative'>
                <img className='absolute right-0 top-0' src={bg1} alt="" />
            </div>
            <div className="flex items-center flex-col text-center pt-12 md:pt-28 pb-20 px-6 md:px-12 relative z-10">
                <h1 className="text-white font-semibold text-2xl md:text-4xl lg:text-5xl pb-12">Investment analysis software: Why should you use it?</h1>
                <h1 className="text-gradient bg-gradient-to-r from-[#4e52c1] to-[#a664ec] text-lg px-6 md:px-24 font-medium">Investors must account for many risk factors when making decisions. Investment analysis software helps identify, evaluate, and mitigate investment risks.</h1>
                <NavLink to="/investment/opportunities/opportunity1"><button  className="bg-[#4E52C1] text-white px-8 py-2 my-12 rounded-3xl text-lg font-semibold">Get Started</button></NavLink>
            </div>
            <div className='flex flex-col md:flex-row w-10/12 items-center justify-between pb-20'>
                <div className='text-white md:w-7/12 relative z-10'>
                    <div className='flex'>
                        <h1 className='w-9/12 text-2xl md:text-4xl font-semibold'>The benefits of investment analysis software</h1>
                        <img className='pl-4 h-12' src={growth} alt="" />
                    </div>
                    <ul className=' list-disc'>
                        <li className='mt-4 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ratione quaerat distinctio ducimus nesciunt laudantium similique sunt recusandae autem officiis!</li>
                        <li className='mt-4 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ratione quaerat distinctio ducimus nesciunt laudantium similique sunt recusandae autem officiis!</li>
                        <li className='mt-4 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ratione quaerat distinctio ducimus nesciunt laudantium similique sunt recusandae autem officiis!</li>
                    </ul>
                </div>
                <div className='md:w-5/12 px-2 mt-6 relative z-10'>
                    <img className='rounded-full' src={animation} alt="" />
                </div>
            </div>
            <div className='w-full relative'>
                <img className='absolute left-0 bottom-0' src={bg2} alt="" />
            </div>
        </div>
    )
}

export default Home;
