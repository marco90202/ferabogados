import React from 'react' 
import Header from "../header/Header"
import Footer from "../footer/Footer"

const Contact = () => {



    return(
        <div>
            
            <Header></Header>
            
            <div className='content'>
                <section className='formulario-1'>
                    <h2>FORMULARIO REGISTRO</h2>
                           <div className='box'>
                            <input type="text" className='controls_2'placeholder='nombre' />
                            
                            <input type="text" className='controls_2'placeholder='apellido'/>
                             </div>
                             <div className='box'>
                            <input type="email" className='controls_1'placeholder='correo electronico'/>
                            </div>
                            <div className='box'>
                            <input type="tel" className='controls_1'placeholder='telefono'/>
                            </div>
                            <div className='box'>
                            <input type="text" className='controls_2'placeholder='empresa'/>
                            
                            <input type="text" className='controls_2'placeholder='cargo'  />
                           </div>
                           <div className='box'>
                            <textarea rows='5' cols='10' className='controls_1'placeholder='mensaje'/>
                            </div>
                            <p><input type="checkbox"></input> Estoy de acuerdo con <a href="/">Terminos y Condiciones</a></p>
                            <input type="submit"  className='botons'value='registrar' />
                        
                </section>
            </div>

            <Footer></Footer>

        </div>          
            
        
    )
}
export default Contact