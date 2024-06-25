export default function Header(){
    return(
        <header className=' bg-black text-3xl text-white '>
            <div className='flex justify-between items-center relative' >
                <a href="#"><img className=' w-10' src="/icon/OIP.jpeg" /></a>
                <a href='#' className=' text-center'>My_Prototype</a>
                <p>User</p>
            </div>
        </header>
    )
}