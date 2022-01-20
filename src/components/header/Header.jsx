import React from 'react' 
import logo from '../../assets/images/logo_web.png'

const Header = () => {


    return(
            <div >
            <nav className="menu">
                {/* <label className="logo">FERABOGADOS</label> */}
                <img className="logo" src={logo} alt='FERABOGADOS' height='70' ></img> 
                <ul className="menu_items">
                    <li className="active"><a href="https://www.instagram.com">inicio</a></li>
                    <li><a href='https://www.google.com'>acerca</a></li>
                    <li><a href='www.youtube.com'>servicios</a></li>
                    <li><a href='www.facebook.com'>contactenos</a></li>
                    
                </ul>
            </nav>
            </div>
            
    )
}
export default Header
