import React from 'react' 
import logo from '../../assets/images/logo_web.png'

const Header = () => {


    return(
            <div >
                <header className="clase-header">
                    <img src={logo} alt='FERABOGADOS' height='150'></img>
                    <nav>
                        <ul className='nav'>
                            <li className='nav_item'><a className='color-letra' href='https://www.google.com' >INICIO</a></li>
                            <li className='nav_item'><a className='color-letra' href='www.youtube.com'>SERVICIOS</a></li>
                            <li className='nav_item'><a className='color-letra' href='www.facebook.com'>CONTACTENOS</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
            
    )
}
export default Header
