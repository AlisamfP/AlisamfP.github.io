import "../App.css";

const Footer = () => {

  return (
    <footer className="justify-self-center w-full col-[2/3] md:relative text-[#003333] text-center">
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