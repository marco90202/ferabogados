import React from 'react'
import Header from "../header/Header"

const About = () => {



    return(
            <div>
                <Header></Header>
                <body>
                    <main>
                        <div className='container_card'>
                            <div className='card_father'>
                                <div className='card'>
                                    <div className='card_front'>
                                        <div className='body_card_front'>
                                            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, rem!</h1>
                                        </div>
                                        <div className='card_back'>
                                        <div className='body_card_back'>
                                            <h1>windows 10</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam, quia sequi quisquam tempora accusamus ea similique ipsam nulla nemo, ab voluptas itaque temporibus pariatur, fugiat error maxime quaerat? Accusamus!</p>
                                            <input type='buton' value='leer mas'></input>
                                        </div>
                                    </div>
                                </div> 
                            </div>   
                        </div>
                    </div>
                </main>
            </body>
        </div>
        )
}
export default About