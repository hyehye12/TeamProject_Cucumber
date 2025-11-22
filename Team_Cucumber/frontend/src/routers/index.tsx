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
  ReportsYouthDrugs,
} from "../components";
import { ReportsCopyright } from "../components/reports/mains/ReportsCopyright";
import ReportsYouthItem from "../components/reports/mains/ReportsYouthItem";
import ReportsHealthGuideline from "../components/reports/mains/ReportsHealthGuideline";
import ReportsCustomProducts from "../components/reports/mains/ReportsCustomProducts";
import ReportsProhibitedFood from "../components/reports/mains/ReportsProhibitedFood";
import ReportsProhibitedCosmetics from "../components/reports/mains/ReportsProhibitedCosmetics";
import ReportsDangerousGoods from "../components/reports/mains/ReportsDangerousGoods";
import ReportsHazardousMaterials from "../components/reports/mains/ReportsHazardousMaterials";
import ReportsMilitary from "../components/reports/mains/ReportsMilitary";
import ReportsProhibitedTickets from "../components/reports/mains/ReportsProhibitedTickets";
import ReportsFakeFreeGiveaway from "../components/reports/mains/ReportsFakeFreeGiveaway";
import ReportsHazardousProducts from "../components/reports/mains/ReportsHazardousProducts";
import ReportsOthers from "../components/reports/mains/ReportsOthers";

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
                element={<ReportsYouthDrugs />}
              />
              <Route
                path=":category/youth-restricted-items"
                element={<ReportsYouthItem />}
              />
              <Route
                path=":category/health-supplement-guideline"
                element={<ReportsHealthGuideline />}
              />
              <Route
                path=":category/custom-made-products"
                element={<ReportsCustomProducts />}
              />
              <Route
                path=":category/prohibited-food"
                element={<ReportsProhibitedFood />}
              />
              <Route
                path=":category/prohibited-cosmetics"
                element={<ReportsProhibitedCosmetics />}
              />
              <Route
                path=":category/dangerous-goods"
                element={<ReportsDangerousGoods />}
              />
              <Route
                path=":category/hazardous-materials"
                element={<ReportsHazardousMaterials />}
              />
              <Route
                path=":category/military-police-uniforms"
                element={<ReportsMilitary />}
              />
              <Route
                path=":category/prohibited-tickets"
                element={<ReportsProhibitedTickets />}
              />
              <Route
                path=":category/fake-free-giveaway"
                element={<ReportsFakeFreeGiveaway />}
              />
              <Route
                path=":category/hazardous-products"
                element={<ReportsHazardousProducts />}
              />
              <Route path=":category/others" element={<ReportsOthers />} />
            </Route>
          </Routes>
        )}
      </PageTransition>
    </BrowserRouter>
  );
};
