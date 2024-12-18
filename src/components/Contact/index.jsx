import './style.css'; // CSS específico para o componente Contact

const Contact = () => (
  <section className="section" id="contact">
    <h2>Get in Touch</h2>
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Message" rows="5" required></textarea>
      <button className="contact" type="submit">
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
