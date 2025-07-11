export default function About() {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-background">
        <div className="mx-20 pt-20">
          <h1 className="mb-10">
            <span className="text-main">안녕하세요! 저는 </span>
            <span className="text-sub">프론트엔드 개발자</span>
          </h1>
          <div className="b1 mb-10 text-sub">이재건입니다.</div>
          <span className="b1 leading-15 whitespace-pre-line text-main">
            {`책임감을 가지고 앞장서며, 
              소통을 통해 함께 성장하는 개발자입니다.`}
          </span>
          <h2 className="mt-15 font-normal">
            다양한 팀 활동에서 팀장을 맡으며, 구성원을 이글고 조율하는 경험을
            쌓아왔습니다.
          </h2>
          <h2 className="mb-15 font-normal">
            앞으로도 협업과 책임을 기반으로 더 나은 개발자로 나아가겠습니다.
          </h2>
          <div className="flex gap-6.25">
            <img className="h-25 w-25" src="/github1.png" alt="깃허브" />
            <img className="h-25 w-25" src="/tistory1.png" alt="티스토리" />
          </div>
        </div>
      </div>
    </>
  );
}
