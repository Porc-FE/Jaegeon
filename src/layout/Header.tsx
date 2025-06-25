import Logo from "/jgun.png";

export default function Header() {
  return (
    <>
      <header className="flex h-24 items-center justify-center">
        <img className="ml-5 h-24 w-24" src={Logo} alt="로고" />
        <div className="flex-grow"></div>
        <div className="mr-15 flex gap-11">
          <button className="h3 text-main">About Me</button>
          <button className="h3 text-main">Skills</button>
          <button className="h3 text-main">Experience</button>
        </div>
      </header>
    </>
  );
}
