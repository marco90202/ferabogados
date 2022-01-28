import React from 'react' 
import Header from "../header/Header"

const Contact = () => {



    return(
        <div className='content'>
            
            <Header></Header>
            
            <body>
                <section className='formulario-1'>
                    <h2>Formulario Registro</h2>
                           <div className='box'>
                            <input type="text" className='controls_2'placeholder='nombre' />
                            
                            <input type="text" className='controls_2'placeholder='apellido'/>
                             </div>
                             <div classNamme='box'>
                            <input type="email" className='controls_1'placeholder='correo electronico'/>
                            </div>
                            <div classNamme='box'>
                            <input type="tel" className='controls_1'placeholder='telefono'/>
                            </div>
                            <div className='box'>
                            <input type="text" className='controls_2'placeholder='empresa'/>
                            
                            <input type="text" className='controls_2'placeholder='cargo'  />
                           </div>
                           <div classNamme='box'>
                            <textarea rows='5' cols='10' className='controls_1'placeholder='mensaje'/>
                            </div>
                            <p>Estoy de acuerdo con <a href="/">Terminos y Condiciones</a></p>
                            <input type="submit"  className='botons'value='registrar' />
                        
                </section>
            </body>
        </div>          
            
        
    )
}
export default Contact