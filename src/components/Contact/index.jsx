import * as Styled from './style.js'; // CSS específico para o componente Contact
import { Section, Button } from '../../styles/globalStyle';

const Contact = () => (
  <Section id="contact">
    <Styled.ContactTitle>
      Get in Touch <hr />
    </Styled.ContactTitle>
    <Styled.ContactForm className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <Styled.Input type="text" placeholder="Name" required />
      <Styled.Input type="email" placeholder="Email" required />
      <Styled.Textarea placeholder="Message" rows="5" required></Styled.Textarea>
      <Button className="contact" type="submit">
        Send Message
      </Button>
    </Styled.ContactForm>
  </Section>
);

export default Contact;
