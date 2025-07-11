export default function About() {
  return (
    <>
      <div className="mb-20 h-fit w-360 bg-background">
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
        <div className="relative m-20 pt-20">
          <p className="mb-15 text-5xl font-bold text-main">About Me</p>
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="mb-5">Date of birth</h2>
              <h4>August. 1st. 2000</h4>
            </div>
            <div>
              <h2 className="mb-5">Education</h2>
              <h4>성결대학교 컴퓨터공학과 학사 2019. 03 - 2025. 02</h4>
              <h4>평점(전공): 4.27(4.42) / 4.5</h4>
            </div>
            <div>
              <h2 className="mb-5">Awards</h2>
              <h4>한국디지털컨텐츠학회 하계종합학술제 동상 2023. 07</h4>
            </div>
            <div>
              <h2 className="mb-5">License</h2>
              <h4>정보처리기사 2024. 06 </h4>
              <h4>CosPro 1급 Python 2024. 12</h4>
              <h4>SQLD 2025. 04</h4>
            </div>
            <div className="flex gap-20">
              <div className="w-91">
                <h2 className="mb-5">Address</h2>
                <h4>Shiheung-Si, South Korea.</h4>
              </div>
              <div className="w-91">
                <h2 className="mb-5">Tel / Email</h2>
                <h4>010-2834-1722 / 79gun79@naver.com</h4>
              </div>
              <div className="w-91">
                <h2 className="mb-5">Etc...</h2>
                <div className="flex gap-5">
                  <img className="h-20 w-20" src="/github1.png" alt="깃허브" />
                  <img
                    className="h-20 w-20"
                    src="/tistory1.png"
                    alt="티스토리"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            src="/profile.jpg"
            alt="내 사진"
            className="absolute right-30 bottom-70 h-100 w-100 rounded-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
