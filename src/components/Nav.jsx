import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} 
                alt="logo"
                width={130}
                height={29} />
            </a>
            <ul className='flex flex-1 justify-center items-center max-lg:gap-2 gap-16 max-sm:hidden'>
              {navLinks.map((nav) =>(
                <li key={nav.label} className='hover:text-red-700'>
                  <a href={nav.href}>{nav.label}</a>
                </li>
              ))}
            </ul>
            <div className='sm:hidden cursor-pointer' id='showMenu' >
            <img src={hamburger} alt="hamburger" width='30px' height='30px'  className='hover:scale-125 transition'/>
              
            </div>
            <div className=' absolute  p-2 right-3 top-16  bg-blue-100 rounded-lg hidden' id='menu'>
                  <ul >
                    <li>oooooooooooooo</li>
                    <li>oooooooooooooo</li>
                    <li>oooooooooooooo</li>
                    <li>oooooooooooooo</li>
                    <li>oooooooooooooo</li>
                  </ul>
              </div>
        </nav>
        
    </header>
  )
}


export default Nav