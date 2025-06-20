import Logo from "../assets/jgun.png";

export default function Header() {
  return (
    <>
      <header className="flex h-36 items-center justify-center">
        <img className="ml-5 h-36 w-36" src={Logo} alt="로고" />
        <div className="flex-grow"></div>
        <div className="mr-15 flex gap-11">
          <button className="h2 text-main">About Me</button>
          <button className="h2 text-main">Skills</button>
          <button className="h2 text-main">Experience</button>
        </div>
      </header>
    </>
  );
}
