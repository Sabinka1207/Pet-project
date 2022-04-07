import Btn from "../components/button";
import { ReactComponent as Logo } from "../img/Logo.svg";

function Header() {
  return (
    <header>
      <div className="header container">
        <Logo />
        <div className="buttons">
          <Btn color="yellow">Users</Btn>
          <Btn color="yellow">Sign up</Btn>
        </div>
      </div>
    </header>
  );
}

export default Header;
