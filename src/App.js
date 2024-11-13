import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/Pages/AboutPage";
import BlogPage from "./components/Pages/BlogPage";
import BlogDetailsPage from "./components/Pages/BlogDetailsPage";
import ContactPage from "./components/Pages/ContactPage";
import ErrorPage from "./components/Pages/ErrorPage";
import Home from "./components/Pages/Home";
import PortfolioDetailsPage from "./components/Pages/PortfolioDetailsPage";
import ServicesPage from "./components/Pages/ServicesPage";
import PortfolioPage from "./components/Pages/PortfolioPage";
import Layout from "./components/Layout";
import ProjectDetailsPage from "./components/Pages/ProjectDetailsPage";
import ProjectsListPage from "./components/Pages/ProjectsListPage";
import ProjectsPage from "./components/Pages/ProjectsPage";
import ServiceDetailed from "./components/ServiceList/ServiceDetailed";
import NewsEventsPage from "./components/Pages/NewsEvents";
import NewsEventsDetailedPage from "./components/Pages/NewsEventsDetailedPage";
import TrainingCoursesPage from "./components/Pages/TrainingCoursesPage";

function App() {
  return (
    // <ErrorPage />
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicesPage />} />
          <Route
            path="service/:serviceDetailsId"
            element={<ServiceDetailed />}
          />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route
            path="portfolio/:portfolioDetailsId"
            element={<PortfolioDetailsPage />}
          />
          <Route
            path="projects/category/:category"
            element={<ProjectsListPage />}
          />
          <Route path="projects/:id" element={<ProjectDetailsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blogs/:id" element={<BlogDetailsPage />} />
          <Route path="newsevents" element={<NewsEventsPage />} />
          <Route path="newsevents/:id" element={<NewsEventsDetailedPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="trainingcourses" element={<TrainingCoursesPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
