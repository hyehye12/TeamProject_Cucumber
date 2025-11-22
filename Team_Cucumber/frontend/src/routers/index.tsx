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
import ReportsFraudSeller from "../components/reports/mains/ReportsFraudSeller";
import ReportsFraudBuyer from "../components/reports/mains/ReportsFraudBuyer";
import ReportsExternalTrade from "../components/reports/mains/ReportsExternalTrade";
import ReportsUnusableProduct from "../components/reports/mains/ReportsUnusableProduct";
import ReportsDuplicatePost from "../components/reports/mains/ReportsDuplicatePost";
import ReportsResell from "../components/reports/mains/ReportsResell";
import ReportsMoneyRequest from "../components/reports/mains/ReportsMoneyRequest";
import ReportsSuggestReportItem from "../components/reports/mains/ReportsSuggestReportItem";
import ReportsDispute from "../components/reports/mains/ReportsDispute";
import ReportsAbuse from "../components/reports/mains/ReportsAbuse";
import ReportsUnwantedChat from "../components/reports/mains/ReportsUnwantedChat";
import ReportsSexualBehavior from "../components/reports/mains/ReportsSexualBehavior";
import ReportsProfileImage from "../components/reports/mains/ReportsProfileImage";
import ReportsNickname from "../components/reports/mains/ReportsNickname";
import ReportsPolitics from "../components/reports/mains/ReportsPolitics";
import ReportsUnder14 from "../components/reports/mains/ReportsUnder14";

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
              <Route path="bans/others" element={<ReportsOthers />} />
              <Route
                path=":category/fraud-seller-no-delivery"
                element={<ReportsFraudSeller />}
              />
              <Route
                path=":category/fraud-buyer-no-payment"
                element={<ReportsFraudBuyer />}
              />
              <Route
                path=":category/fraud-external-channel"
                element={<ReportsExternalTrade />}
              />
              <Route
                path=":category/unusable-product"
                element={<ReportsUnusableProduct />}
              />
              <Route
                path=":category/duplicate-post"
                element={<ReportsDuplicatePost />}
              />
              <Route
                path=":category/resell-at-higher-price"
                element={<ReportsResell />}
              />
              <Route
                path=":category/free-giveaway-or-money-request"
                element={<ReportsMoneyRequest />}
              />
              <Route
                path=":category/suggest-report-item"
                element={<ReportsSuggestReportItem />}
              />
              <Route
                path=":category/abuse-or-hate-speech"
                element={<ReportsAbuse />}
              />
              <Route
                path=":category/unwanted-romantic-chat"
                element={<ReportsUnwantedChat />}
              />
              <Route
                path=":category/inappropriate-sexual-behavior"
                element={<ReportsSexualBehavior />}
              />
              <Route path="users/others">
                <Route index element={<ReportsMain />} />
                <Route path="profile-image" element={<ReportsProfileImage />} />
                <Route path="nickname" element={<ReportsNickname />} />
                <Route
                  path="politics-religions"
                  element={<ReportsPolitics />}
                />
                <Route path="under-14" element={<ReportsUnder14 />} />
              </Route>
              <Route path="users/dispute">
                <Route index element={<ReportsMain />} />
                <Route path="request" element={<ReportsDispute />} />
              </Route>
            </Route>
          </Routes>
        )}
      </PageTransition>
    </BrowserRouter>
  );
};
