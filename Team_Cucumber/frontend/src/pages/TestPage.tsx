import { Outlet, NavLink, useParams } from "react-router-dom";
import { Toast, useToast } from "../components";
import { useEffect } from "react";

// 부모 레이아웃 (여기에 Outlet 필수)
export const TestPage = () => {
  return (
    <main className="relative">
      <nav>
        <NavLink to="/test">Test</NavLink>
        <NavLink to="Hemin">Hemin</NavLink>
        <NavLink to="Nara">Nara</NavLink>
        <NavLink to="Joowon">Joowon</NavLink>
      </nav>
      <hr />
      <Outlet /> {/* 자식 라우트가 여기로 렌더링 */}
      <Toast />
    </main>
  );
};

// 인덱스 자식 (옵션)
export const TestHome = () => {
  return <div>테스트 홈</div>;
};

// 같은 파일 안에 PersonPage 정의
export const PersonPage = () => {
  const { name } = useParams<{ name: "Hemin" | "Nara" | "Joowon" }>();

  const msg = "안녕하세요";

  const toast = useToast();

  useEffect(() => {
    toast({ msg });
  }, [msg]);

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
};
