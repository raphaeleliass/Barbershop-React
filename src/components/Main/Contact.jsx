import {
  ImFacebook2,
  ImInstagram,
  ImLocation,
  ImMail2,
  ImPhone,
  ImTwitter,
  ImWhatsapp,
} from "react-icons/im";

function Contact() {
  return (
    <footer className="absolute left-0 right-0 flex flex-col items-center justify-around gap-12 rounded-t-xl bg-black px-12 py-12 text-white md:gap-12">
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-x-12">
        <div className="flex flex-col items-center text-4xl font-black uppercase md:text-4xl lg:text-3xl">
          <a href="#" className="p-2 text-center">
            barbershop
          </a>
          <div className="flex flex-row gap-1">
            <a href="">
              <ImFacebook2 className="size-8 p-1 transition-all hover:text-green-500 md:size-10 lg:size-8" />
            </a>
            <a href="">
              <ImInstagram className="size-8 p-1 transition-all hover:text-green-500 md:size-10 lg:size-8" />
            </a>
            <a href="">
              <ImTwitter className="size-8 p-1 transition-all hover:text-green-500 md:size-10 lg:size-8" />
            </a>
            <a href="">
              <ImWhatsapp className="size-8 p-1 transition-all hover:text-green-500 md:size-10 lg:size-8" />
            </a>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          <li>
            <a
              href="#"
              className="flex flex-row items-center gap-2 transition-all hover:text-green-500"
            >
              <ImPhone />
              (212) 555-1234
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex flex-row items-center gap-2 transition-all hover:text-green-500"
            >
              <ImMail2 />
              contato@estilounico.com
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-neutral-200 p-4 text-center">
        <iframe
          className="h-full w-full rounded-xl shadow-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.00927318475!2d-74.14448626260977!3d40.69737092268822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNova%20Iorque%2C%20NY%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1716236319500!5m2!1spt-BR!2sbr"
        ></iframe>
        <p className="flex w-80 text-sm font-medium text-neutral-600">
          <ImLocation className="size-5 md:size-6 lg:size-5" />
          1234 Broadway Ave, Suite 101 New York, NY 10001 USA
        </p>
      </div>
      <p className="absolute bottom-0 mb-2 font-light text-white">
        &copy; Criado e desenvolvido por
        <a
          className="p-1 font-medium transition-all hover:text-green-300"
          href="https://raphaelelias.vercel.app"
          target="_blank"
        >
          Raphael Elias
        </a>
      </p>
    </footer>
  );
}

export default Contact;
