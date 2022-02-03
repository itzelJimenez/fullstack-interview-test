import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFoundPage from "../views/NotFoundPage/NotFoundPage";
import { routes } from "./routes";

const Router = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(element => (
        <Route key={element.name} path={element.route} element={<element.component />} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;



