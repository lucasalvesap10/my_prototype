import NavBar from './NavBar'
import User from './User'
export default function Header(){
    return(
        <header className='w-screen h-auto bg-black text-3xl text-white '>
            <div className='flex justify-between items-center relative' >
                <NavBar/>
                <a href='#' className=' text-center'>My_Prototype</a>
                <User/>
            </div>
        </header>
    )
}