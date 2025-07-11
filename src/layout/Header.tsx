import { Link } from "react-router";
import Logo from "/jgun.png";

export default function Header() {
  return (
    <>
      <header className="flex h-24 items-center justify-center">
        <Link to="/">
          <img className="ml-5 h-24 w-24" src={Logo} alt="로고" />
        </Link>

        <div className="flex-grow"></div>
        <div className="mr-15 flex gap-11">
          <Link to="/about" className="h3 font-bold text-main">
            About Me
          </Link>
          <button className="h3 font-bold text-main">Skills</button>
          <button className="h3 font-bold text-main">Experience</button>
        </div>
      </header>
    </>
  );
}
