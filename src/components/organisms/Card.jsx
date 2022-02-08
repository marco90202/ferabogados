import React from 'react' 

const Card = ({texto_titulo , titulo_contenido , palabras_español , imagen}) => { 

    return (
        <div className='container__card'>
            <div className='card__father'>
                <div className='card'>
                    <div className='card__front'>
                        <img src={imagen} alt='logo'/>
                        {/* <img src= "https://www.udima.es/sites/udima.es/themes/udima/images/areas/derecho.jpg" alt='logo'/> */}
                            <div className='body__card__front'>
                                <h1>{texto_titulo}</h1>
                            </div>
                            <div className='card__back'>
                                <div className='body__card__back'>
                                    <h1>{titulo_contenido}</h1>
                                        <p>{palabras_español}</p>
                                            <input type='buton' value='leer mas'></input>
                                </div>
                            </div>
                    </div> 
                               
                </div>   
            </div>
                        
        </div>
                    
   )
}
export default Card