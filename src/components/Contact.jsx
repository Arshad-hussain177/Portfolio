import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>

        <div className="contact-icons">

          <a href="mailto:arshadhussain1729@gmail.com">
            <FaEnvelope size={30} />
          </a>

          <a href="https://github.com/Arshad-hussain177" target="_blank">
            <FaGithub size={30} />
          </a>

          <a href="https://www.linkedin.com/in/arshad-hussain062004/" target="_blank">
            <FaLinkedin size={30} />
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;