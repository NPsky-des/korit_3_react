function MainComponent () {
  return(
    <main className="main">
      <section className="section">
        <h2 className="section__title">
          About Me
        </h2>
        <p>
          안녕하세요, 저는 KoreaITAcademy 국비 과정으로 Full Stack 과정을 수료한 김일이라고 합니다. 최근에는 React를 이용한 프론트엔드에도 흥미를 가지고 있어 Full Stack 개발자 과정에 지망하게 되었습니다. 문제 해결과 클린 코드를 중시하며, 팀원 간 협업을 통해 가치를 만들어내는 것을 좋아합니다.
        </p>
      </section>
      <section className="section">
        <h2 className="section__title">Experience</h2>
        <ul>
          <li>
            <strong>2025.03 - 현재</strong> ｜ KoreaITAcademy Full Stack 개발자 과정 수료<br />
            - Spring Boot를 이용한 REST API 설계 및 구현<br />
            - MariaDB, H2 인메모리 DB를 통한 ORM 관리 역량<br />
            - Java, JavaScript, SQL 사용 역량
          </li>
          <li>
            <strong>2023.05 - 2023.11</strong> ｜ 레이저가공 및 시각디자인 기능인력 양성 과정 수료<br />
            - CAD / 3D 모델링<br />
            - Photoshop / Illerstrater / Indesign
          </li>
          <li>
            <strong>2021.09 - 2022.11</strong> ｜ 경력 - ㈜알고오디 근로 <br />
            - Design : 네일, 패턴, 배너, 간판, 로고, 명함, 캐릭터<br />
            - 사무보조 : 재고 관리, 물품 진열, 근로학생 출석부 관리, 교수님 업무 보조
          </li>
          <li>
            <strong>2018.03 - 2021.02</strong> ｜ 부산경상대학교 시각디자인 학과 졸업<br />
            - 기초 디자인, 산업, 제품, 패키지, 인테리어, 출판 디자인<br />
            - AutoCAD, 사진학 기초, 도면 작성
          </li>
        </ul>
      </section>
      <section className="section">
        <h2 className="section__title">Skills</h2>
        <p>
          <strong>DrawTools : </strong> ClipStudio, Photoshop, SketchUp <br />
          <strong>DesTools : </strong> Photoshop, Illerstrater, Indesign, Figma <br />
          <strong>Frameworks : </strong> Spring Boot, React, Vite <br />
          <strong>Databases : </strong> MySQL, MariaDB, Java 기반 ORM <br />
          <strong>DevTools : </strong> Git, Docker, Intellij, Bisual Studio Code
        </p>
      </section>
    </main>
  );
}

export default MainComponent;