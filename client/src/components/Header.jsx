import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
const Header=()=>{
    const {currentUser} = useSelector(state => state.user)
    return(
        <header className="h-20 bg-[#211e32] sticky top-0 z-50 flex items-center justify-center">
            <div className="w-10/12 mx-auto flex justify-between">
                <div className="">
                    <Link to='/'>
                        <h1 className="text-[#4E52C1] font-bold text-2xl md:text-4xl">Bal<span className="text-red-600">lers</span></h1>
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <ul className="text-white flex gap-8">
                        <Link className="hidden md:block" to='/investment/opportunities/opportunity1'>
                            {currentUser ? (<li className=" hover:text-[#4E52C1]">Investment</li>):(<li></li>)}
                        </Link>
                        <Link to='/profile'>
                            {currentUser ? (<img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile'/>)
                            :(<li className='hover:underline'>Sign In</li>)}
                        </Link>
                    </ul>
                    <h1 className="ml-2 text-lg font-medium text-white">
                        <Link to='/profile'>
                            {currentUser ? (<span>Hello, {currentUser.username}</span>):(<span></span>)}
                        </Link>
                    </h1>
                </div>
            </div>
        </header>
    )
}

export default Header;