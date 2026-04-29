import "../App.css";

const Footer = () => {

  return (
    <footer className="justify-self-center w-fit col-[2/3] z-50 md:absolute md:-left-64 lg:-left-72 md:bottom-0 text-[#003333] text-center md:w-64 lg:w-72">
      <div className="flex flex-col px-1 py-1">
         <div className="text-sm">
          Made with love, coffee, and React.
          </div>
          <div className="text-xs">
            Trans rights are human rights. Free Palestine.
          </div>
      </div>
    </footer>
  );
};

export default Footer;