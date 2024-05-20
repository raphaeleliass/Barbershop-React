import { ImLocation } from "react-icons/im";

function Contact() {
  return (
    <footer className="absolute left-0 bg-black text-white ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="">contact us</h2>
        <div className="flex gap-2">
          <ImLocation />
          <p className="">
            1234 Broadway Ave, Suite 101 New York, NY 10001 USA
          </p>
          <p>
            Telefone: (212) 555-1234 Email: contato@estilounico.com Horário de
            Funcionamento: Segunda a Sexta: 9h às 19h Sábado: 10h às 17h
            Domingo: Fechado
          </p>
        </div>
        <div className="rounded-xl">
          <iframe
          className="rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.00927318475!2d-74.14448626260977!3d40.69737092268822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNova%20Iorque%2C%20NY%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1716236319500!5m2!1spt-BR!2sbr"></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
