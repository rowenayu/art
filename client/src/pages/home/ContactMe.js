import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Wrapper from '../../assets/wrappers/ContactMe';

const ContactMe = () => {
  const form = useRef();
 
  const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
  emailjs.sendForm('service_fc20ete', 'template_eds74or', form.current, 'CgJ4Bk-wwhYF6WXBv')
     .then((result) => {
         // show the user a success message
     }, (error) => {
         // show the user an error
     });
  };
  return (
    <Wrapper>
      <form className="form" ref={form} onSubmit={sendEmail}>
          <label>name</label>
          <input type="text" name="name" />
          <label>email</label>
          <input type="email" name="from_email" />
          <label>message</label>
          <textarea name="message" />
          <input type="submit" value="send" />
      </form>
    </Wrapper>
  )
}

export default ContactMe
