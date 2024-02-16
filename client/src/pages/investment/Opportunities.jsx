import { NavLink, Outlet } from 'react-router-dom'
const Opportunities=()=>{
    const activeLink='bg-blue-200 text-deep-green'
    const normalLink=''
    return(
        <div className='w-full flex'>
            <div className='w-[30%] mt-14 flex  justify-center bg-white border'>
                <div className='w-full bg-white text-green'>
                        <NavLink className={({isActive})=>isActive?activeLink:normalLink} to="/investment/opportunities/opportunity1">
                        <div className='flex mb-4 hover:bg-blue-200 h-fit  items-center md:pl-2'>
                            <div className='ml-2 py-4'>
                                <h1 className=' text-xs md:text-base font-medium text-green-700'>Investment Opportunity 1</h1>
                            </div>
                        </div>
                        </NavLink>
                        <NavLink className={({isActive})=>isActive?activeLink:normalLink} to="/investment/opportunities/opportunity2">
                        <div className='flex mb-4 hover:bg-blue-200 h-fit  items-center md:pl-2'>
                            <div className='ml-2 py-4'>
                                <h1 className=' text-xs md:text-base font-medium text-green-700'>Investment Opportunity 2</h1>
                            </div>
                        </div>
                        </NavLink>
                        <NavLink className={({isActive})=>isActive?activeLink:normalLink} to="/investment/opportunities/opportunity3">
                        <div className='flex mb-4 hover:bg-blue-200 h-fit  items-center md:pl-2'>
                            <div className='ml-2 py-4'>
                                <h1 className=' text-xs md:text-base font-medium text-green-700'>Investment Opportunity 3</h1>
                            </div>
                        </div>
                        </NavLink>
                        <NavLink className={({isActive})=>isActive?activeLink:normalLink} to="/investment/opportunities/opportunity4">
                        <div className='flex mb-4 hover:bg-blue-200 h-fit  items-center md:pl-2'>
                            <div className='ml-2 py-4'>
                                <h1 className=' text-xs md:text-base font-medium text-green-700'>Investment Opportunity 4</h1>
                            </div>
                        </div>
                        </NavLink>

                </div>
            </div>
            <div className='w-11/12 pt-12 ml-4 md:pl-8 flex flex-col align-baseline justify-start'>
                <Outlet/>
            </div>
        </div>
    )
}
export default Opportunities;