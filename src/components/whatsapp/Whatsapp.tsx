import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const Whatsapp:React.FC = () => {
  const whatsappNumber = "2347070442041"; // Replace with your phone number in international format

  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  
  const chatWithNo = ()=> {
    window.open(`${whatsappLink}`, '_blank');
  }
  return (
    <div className='mt-8 pb-8' onClick={chatWithNo} id='contact'>
        <FontAwesomeIcon icon={faWhatsapp}  size='4x' color='green' className='float-right pr-20 cursor-pointer hover:-translate-y-2 hover:transition-all'/>
    </div>
  )
}

export default Whatsapp
