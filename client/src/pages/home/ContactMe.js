import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Wrapper from "../../assets/wrappers/ContactMe";
import validator from "validator";

const ContactMe = () => {
  const form = useRef();
  const [message, setMessage] = useState("")

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setMessage("Thank you");
    } else {
      setMessage("Please, enter valid Email!");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    emailjs
      .sendForm(
        "service_fc20ete",
        "template_eds74or",
        form.current,
        "CgJ4Bk-wwhYF6WXBv"
      )
      .then(
        (result) => {
          // show the user a success message
        },
        (error) => {
          // show the user an error
        }
      );
  };
  return (
    <Wrapper>
      <form className="center" ref={form} onSubmit={sendEmail}>
        <label>name</label>
        <div className="inputbox">
          <input type="text" name="name" required="required"/>
        </div>
        <label>email</label>
        <div className="inputbox">
          <input type="email" name="from_email" required="required" onChange={(e) => validateEmail(e)}/>
          {message}
        </div>
        <label>message</label>
        <div className="inputbox">
          <textarea name="message" />
        </div>
        <div> 
        <input type="submit" value="send"/>
        </div>
      </form>
    </Wrapper>
  );
};

export default ContactMe;
