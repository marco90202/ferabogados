import React from 'react'
import logo from '../../assets/images/logo_web.png'

const Footer = () => {


    return(
        <footer>
            <div className="pie">
            <nav className="pie_item">
                    <a href="/"><img className="logo" src={logo} alt='FERABOGADOS' height='70'></img> </a>
                    <ul>
                        <li>liie de liágina</li>
                        <li>Texto 1</li>
                        <li>Texto 2</li>
                        <li>Texto 3</li>
                    </ul>
                    

                </nav>

            </div>
        </footer>
    )
}
export default Footer