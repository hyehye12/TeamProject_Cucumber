import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IconsPage, LandingPage, ReportPage, TestPage } from "../pages";
import { TestHeminPage, TestNaraPage, TestJoowonPage } from "../pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<TestPage />}>
          <Route path="Hemin" element={<TestHeminPage />} />
          <Route path="Nara" element={<TestNaraPage />} />
          <Route path="Joowon" element={<TestJoowonPage />} />
          <Route path="icons" element={<IconsPage />} />
        </Route>
        <Route path="/reports" element={<ReportPage />}></Route>
        <Route path="/reports/:path" element={<ReportPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
