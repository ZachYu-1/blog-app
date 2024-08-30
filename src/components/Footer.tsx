import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <span>
        <img src={Logo} alt="logo" />
        <br />
        Designed by
        <br />
        <b>@zachyu</b>
      </span>
    </footer>
  );
};

export default Footer;
