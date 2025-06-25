import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <>
      <div className="mx-10 flex-grow lg:mx-20">
        <p className="tp text-sys-white">Console.log</p>
        <ReactTyped
          className="tp text-sys-white"
          strings={["('Hello World!')", "('Welcome!')"]}
          typeSpeed={60} //타이핑 속도
          backSpeed={35} //타이핑 지우는 속도
          loop={true} //반복할건지
        />
      </div>
      <div className="mx-5 h-50 rounded-t-[20px] bg-background">
        <p className="h3 mt-5 w-full text-center text-main">▲ scroll</p>
      </div>
    </>
  );
}
