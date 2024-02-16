import { NavLink,Outlet} from 'react-router-dom';
import plb1 from '../../assets/profile/plb1.png'
import plb2 from '../../assets/profile/plb2.png'
import plb6 from '../../assets/profile/plb6.png'
import logout from '../../assets/profile/switch.png'
import { useDispatch } from 'react-redux';
import { signOutUserFailure, signOutUserStart, signOutUserSuccess } from "../../redux/user/userSlice"
function Investment() {
    const dispatch = useDispatch();


    const handleSignOut= async()=>{
        try{
          dispatch(signOutUserStart())
          const res = await fetch('/api/auth/signout');
          const data = await res.json();
          if(data.success===false){
            dispatch(signOutUserFailure(data.message));
            return;
          }
          dispatch(signOutUserSuccess(data));
        }catch(error){
          dispatch(signOutUserFailure(data.message));
        }
      }
    const activeLink='bg-blue-200 text-deep-green'
    const normalLink=''
  return(
    <div className="myProfileContainer bg-pale-mint w-full h-fit flex flex-col md:flex-row pb-8">
        <div className='w-full md:w-1/4 flex h-full flex-col md:mt-20 items-baseline md:ml-8 duration-100'>
            <div className={`duration-200 ${!open && 'invisible'} w-full h-full bg-white flex text-center justify-center rounded-xl shadow-gray-900`}>
                <div className="myprofileBottomContent border mr-2 h-fit w-full bg-slate-400 md:bg-white mt-2 flex flex-row md:flex-col justify-evenly">
                    <NavLink className={({isActive})=>isActive?activeLink:normalLink} to="/investment/opportunities/opportunity1">
                        <div className="Bottom w-full h-6 md:h-12 hover:bg-blue-200 flex items-center justify-left mt-2">
                            <div className="BottomIcon pl-1 md:pl-6">
                                <img className='w-11/12 h-4/5 hidden md:block' src={plb2} alt="" />
                            </div>
                            <div className="bottomType px-2">
                                <p className='text-xs md:text-lg'>Opportunities</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink className={({isActive})=>isActive?activeLink:normalLink} to="/investment/profile">
                    <div className="Bottom w-full h-6 md:h-12 hover:bg-blue-200 flex items-center justify-left mt-2">
                        <div className="BottomIcon pl-1 md:pl-6">
                            <img className='w-11/12 h-4/5 hidden md:block' src={plb1} alt="" />
                        </div>
                            <div className="bottomType px-2">
                                <p className='text-xs md:text-lg'>My Profile</p>
                            </div>
                    </div>
                    </NavLink>
                    <NavLink className={({isActive})=>isActive?activeLink:normalLink} to="/investment/help">
                    <div className="Bottom w-full h-6 md:h-12 hover:bg-blue-200 flex items-center justify-left mt-2">
                        <div className="BottomIcon pl-1 md:pl-6">
                            <img className='w-11/12 h-4/5 hidden md:block' src={plb6} alt="" />
                        </div>
                        <div className="bottomType px-2">
                            <p className='text-xs md:text-lg'>Help & Support</p>
                        </div>
                    </div>
                    </NavLink>
                    <div className='mt-40 hidden md:block ml-6'>
                        <button onClick={handleSignOut} className='bg bg-blue-950 flex h-6 md:h-8 rounded-2xl w-32 justify-center items-center'>
                            <img className='pr-1' src={logout} alt="" />
                            <h1 className='text-white text-xs md:text-sm'>Logout</h1>
                        </button>
                    </div>    
                </div>
            </div>
        </div>
        <div className='w-full mt-8'>
        <Outlet/>
        </div>
    </div>
)

}

export default Investment