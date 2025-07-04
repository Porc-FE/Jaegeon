export default function Start() {
  return (
    <>
      <div className="relative h-screen bg-sub">
        <div className="flex h-full items-center justify-center">
          <p className="b1 text-sys-white/25"> 안녕하세요!</p>
        </div>
        <img
          src={`/fireOff.png`}
          alt="꺼진모닥불"
          className="absolute bottom-5 left-1/2 h-60 w-60 -translate-x-1/2 transform object-fill"
        />

        <img
          src={`/touch.png`}
          alt="꺼진모닥불"
          className="absolute right-0 bottom-0 h-[300px] w-50 rotate-315"
        />
      </div>
    </>
  );
}
