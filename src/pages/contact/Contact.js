import './Contact.css'

import { ReactComponent as LiComponent } from './linkedin.svg';
import { ReactComponent as GiComponent } from './github.svg';


function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      
      <p>You can reach me via email: <strong>jamesbarge15@gmail.com</strong></p>
      <a class='connection-button' href='https://www.linkedin.com/in/james-barge-2b36b6276/'>
        <LiComponent />
      </a>

      <a class='connection-button' href='https://github.com/ArgeBarge'>
        <GiComponent />
      </a>
    </div>
  );
}

export default Contact;