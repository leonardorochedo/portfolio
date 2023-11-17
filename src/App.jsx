// Rotas
import { Home } from "./sections/Home/Home";
import { ContactPage } from "./sections/ContactPage/ContactPage";
import { NotFound } from "./sections/NotFound/NotFound";

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
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}