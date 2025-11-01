import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, TestPage } from "../pages";
import { TestHeminPage, TestNaraPage, TestJoowonPage } from "../pages";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<TestPage />}>
          <Route path="Hemin" element={<TestHeminPage />} />
          <Route path="Nara" element={<TestNaraPage />} />
          <Route path="Joowon" element={<TestJoowonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
