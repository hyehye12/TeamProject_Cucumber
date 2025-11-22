import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IconsPage, LandingPage, ReportsPage, TestPage } from "../pages";
import { TestHeminPage, TestNaraPage, TestJoowonPage } from "../pages";
import { PageTransition } from "../components/common/PageTransition/PageTransition";
import {
  ReportsLivingAnimals,
  ReportsMain,
  ReportsMedicalProducts,
  ReportsProfessional,
  ReportsProxy,
  ReportsTrademarkInfringement,
} from "../components";
import { ReportsCopyright } from "../components/reports/mains/ReportsCopyright";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <PageTransition animation="slide-left" timeout={700}>
        {(fixedLocation) => (
          <Routes location={fixedLocation}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/test" element={<TestPage />}>
              <Route path="Hemin" element={<TestHeminPage />} />
              <Route path="Nara" element={<TestNaraPage />} />
              <Route path="Joowon" element={<TestJoowonPage />} />
              <Route path="icons" element={<IconsPage />} />
            </Route>
            <Route path="/reports" element={<ReportsPage />}>
              <Route index element={<ReportsMain />} />
              <Route path=":category" element={<ReportsMain />}></Route>
              <Route path="professional" element={<ReportsProfessional />} />
              <Route path="proxy" element={<ReportsProxy />} />
              <Route path=":category/:detail" element={<ReportsMain />} />
              <Route
                path=":category/living-animals"
                element={<ReportsLivingAnimals />}
              />
              <Route
                path=":category/medical-products"
                element={<ReportsMedicalProducts />}
              />
              <Route
                path=":category/trademark-infringement"
                element={<ReportsTrademarkInfringement />}
              />
              <Route
                path=":category/copyright-infringement"
                element={<ReportsCopyright />}
              />
              <Route
                path=":category/youth-restricted-drugs"
                element={<ReportsCopyright />}
              />
              <Route
                path=":category/youth-restricted-items"
                element={<ReportsCopyright />}
              />
              <Route
                path=":category/health-supplement-guideline"
                element={<ReportsCopyright />}
              />
              <Route
                path=":category/custom-made-products"
                element={<ReportsCopyright />}
              />
              <Route
                path=":category/prohibited-food"
                element={<ReportsCopyright />}
              />
              <Route
                path=":category/prohibited-cosmetics"
                element={<ReportsCopyright />}
              />
              <Route
                path=":category/dangerous-goods"
                element={<ReportsCopyright />}
              />
              <Route
                path=":category/hazardous-materials"
                element={<ReportsCopyright />}
              />
              <Route
                path=":category/military-police-uniforms"
                element={<ReportsCopyright />}
              />
              <Route
                path=":category/prohibited-tickets"
                element={<ReportsCopyright />}
              />
              <Route
                path=":category/fake-free-giveaway"
                element={<ReportsCopyright />}
              />
              <Route
                path=":category/hazardous-products"
                element={<ReportsCopyright />}
              />
              <Route path=":category/others" element={<ReportsCopyright />} />
            </Route>
          </Routes>
        )}
      </PageTransition>
    </BrowserRouter>
  );
};
