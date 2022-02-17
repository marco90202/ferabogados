import React from 'react'
import logo from '../../assets/images/logo_web.png'

const Footer = () => {


    return(
        <footer>
            <div className="pie">
            <nav className="pie_item">
                    <aside><a href="/"><img className="logo" src={logo} alt='FERABOGADOS' height='70'></img></a><br /><hr />
                    <br />
                    <ul>
                        <a><li>Sector II Grupo I. Mz C Lt 19</li></a><br />
                        <a href='mailto:dialogolaboralperu@gmail.com'><li>dialogolaboralperu@gmail.com</li></a><br />
                        <a href='tel:015554444'><li>(01) 555-4444</li></a>
                    </ul>
                    </aside>
                </nav>

            </div>
        </footer>
    )
}
export default Footer