import { Outlet, NavLink, useParams } from "react-router-dom";

// 부모 레이아웃 (여기에 Outlet 필수)
export const TestPage = () => {
  return (
    <main>
      <nav>
        <NavLink to="/test">Test</NavLink>
        <NavLink to="Hemin">Hemin</NavLink>
        <NavLink to="Nara">Nara</NavLink>
        <NavLink to="Juwone">Juwone</NavLink>
      </nav>
      <hr />
      <Outlet /> {/* 자식 라우트가 여기로 렌더링 */}
    </main>
  );
};

// 인덱스 자식 (옵션)
export const TestHome = () => {
  return <div>테스트 홈</div>;
};

// 같은 파일 안에 PersonPage 정의
export function PersonPage() {
  const { name } = useParams<{ name: "Hemin" | "Nara" | "Juwone" }>();

  const PEOPLE = {
    Hemin: { title: "혜민" },
    Nara: { title: "나라" },
    Joowon: { title: "주원" },
  } as const;

  const person = name ? PEOPLE[name] : undefined;
  if (!person) return <div>존재하지 않는 사람입니다.</div>;

  return (
    <section>
      <h1>{person.title}</h1>
    </section>
  );
}
