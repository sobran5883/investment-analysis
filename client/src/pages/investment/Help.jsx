import { Mail } from 'lucide-react';

const Help=()=>{
    return(
        <div className="w-full bg-pale-mint flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row w-10/12 mt-16">
                <div className="md:w-8/12">
                    <div>
                        <h1 className="font-semibold text-gray-700 font-inter max-w-[700px] text-2xl md:text-4xl">Contact us in case of any queries</h1>
                        <p className="mt-5 font-medium">Got a question? Send us a message and we’ll respond as soon as possible.</p>
                    </div>
                    <div className="flex items-center mt-5 mb-12">
                        <h1>Write to Us:</h1>    
                        <a href='mailto:care@ballers.com' className='text-black font-roboto font-light ml-2'>care@ballers.com</a>
                    </div>
                </div>
                <div className="w-4/12 flex flex-col justify-evenly">
                    <div className="flex items-center mb-4">
                        <div className="mx-2 mb-5">
                        <Mail/>
                        </div>
                        <div>
                            <h1>For Customer Queries</h1>
                            <a href='mailto:care@baller.com' className='text-black font-roboto font-light ml-2'>customer@ballers.com</a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="mx-2 mb-5">
                        <Mail/>
                        </div>
                        <div>
                            <h1>For Other Queries</h1>
                            <a href='mailto:care@baller.com' className='text-black font-roboto font-light ml-2'>hello@ballers.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Help;
