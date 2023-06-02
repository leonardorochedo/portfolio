// Rotas
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Techs } from "./pages/Techs/Techs";
import { Projects } from "./pages/Projects/Projects";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { NotFound } from "./pages/NotFound/NotFound";

// Lib
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/tecnologias" element={<Techs />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}