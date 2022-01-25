import React from 'react' 
import Header from "../header/Header"

const Contact = () => {



    return(
        <div className='content'>
            
            <Header></Header>
            
            <body>
                <section className='formulario-1'>
                    <h2>formulario registro</h2>
                           <div className='box'>
                            <input type="text" className='controls'placeholder='nombre' />
                            
                            <input type="text" className='controls'placeholder='apellido'/>
                             </div>
                            <input type="email" className='controls'placeholder='correo electronico'/>
                        
                            <input type="tel" className='controls'placeholder='telefono'/>
                            <div className='box-1'>
                            <input type="text" className='controls'placeholder='empresa'/>
                            
                            <input type="text" className='controls'placeholder='cargo'  />
                           </div>
                            <input type="text" className='controls'placeholder='mensaje'/>
                            <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
                            <input type="submit"  className='botons'value='registrar' />
                        
                </section>
            </body>
        </div>          
            
        
    )
}
export default Contact