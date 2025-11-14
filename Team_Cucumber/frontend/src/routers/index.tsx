import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IconsPage, LandingPage, TestPage } from "../pages";
import { TestHeminPage, TestNaraPage, TestJoowonPage } from "../pages";
import { PageTransition } from "../components/common/PageTransition/PageTransition";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <PageTransition animation="slide-left" timeout={700} className="p-6">
        {(fixedLocation) => (
          <Routes location={fixedLocation}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/test" element={<TestPage />}>
              <Route path="Hemin" element={<TestHeminPage />} />
              <Route path="Nara" element={<TestNaraPage />} />
              <Route path="Joowon" element={<TestJoowonPage />} />
              <Route path="icons" element={<IconsPage />} />
            </Route>
          </Routes>
        )}
      </PageTransition>
    </BrowserRouter>
  );
};
