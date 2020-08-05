import React from 'react' ;

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'
function TeacherItem(){
    return(    
        <article className="teacher-item">
            <header>
                <img src="https://instagram.fcgh29-1.fna.fbcdn.net/v/t51.2885-19/10948766_1522765738011230_204769372_a.jpg?_nc_ht=instagram.fcgh29-1.fna.fbcdn.net&_nc_ohc=uR-Y0LirgK0AX-8vbHB&oh=80035748bbbbdb9368efe85598bff4aa&oe=5F555D4B" alt="Romulo Benica"/>
                <div>
                    <strong>Romulo Benica</strong>
                    <span>Geografia</span>
                </div>
            </header>

            <p>
            Entusiasta das melhores tecnologias de química avançada. 
            <br/><br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preoço/Hora
                    <strong>R$25,00</strong>
                </p>
                <button type="button" >
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;