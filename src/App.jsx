import { Header } from "./components/Header/Header";

import { Home } from "./sections/Home/Home";
import { Projects } from "./sections/Projects/Projects";
import { Techs } from "./sections/Techs/Techs";
import { Contact } from "./sections/Contact/Contact";

export function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Home />
        <Techs />
        <Projects />
        <Contact />
      </div>
    </>
  )
}