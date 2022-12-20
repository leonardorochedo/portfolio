// Rotas
import { Home } from "./routes/Home/Home";
import { About } from "./routes/About/About";
import { Techs } from "./routes/Techs/Techs";
import { Projects } from "./routes/Projects/Projects";
import { ContactPage } from "./routes/ContactPage/ContactPage";
import { NotFound } from "./routes/NotFound/NotFound";

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