import { Outlet, NavLink, useLocation } from "react-router-dom";

// 부모 레이아웃 (여기에 Outlet 필수)
export const TestPage = () => {
  const { pathname } = useLocation();
  const name = pathname.split("test/")[1] as "Hemin" | "Nara" | "Joowon" | "";

  const PEOPLE = {
    Hemin: { title: "혜민" },
    Nara: { title: "나라" },
    Joowon: { title: "주원" },
  } as const;

  const person = name ? PEOPLE[name] : { title: "존재하지 않는 사람입니다." };

  return (
    // 페이지가 body의 높이를 상속함, 화면 상의 높이 배분을 위해서 flex flex-col 사용
    <div className="flex flex-col h-full">
      <header>
        <nav>
          <NavLink to="/test">Test</NavLink>
          <NavLink to="Hemin">Hemin</NavLink>
          <NavLink to="Nara">Nara</NavLink>
          <NavLink to="Joowon">Joowon</NavLink>
        </nav>
      </header>
      <hr />
      {/* main이 main를 제외한 나머지 부분의 높이를 가지게 하기 위해서 flex-1 사용  */}
      <main className="relative flex-1">
        <h1>{person.title}</h1>
        <Outlet /> {/* 자식 라우트가 여기로 렌더링 */}
      </main>
    </div>
  );
};
