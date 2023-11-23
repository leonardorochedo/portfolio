import { Header } from "./components/Header/Header";

import { Home } from "./sections/Home/Home";
import { About } from "./sections/About/About";
import { Projects } from "./sections/Projects/Projects";
import { Techs } from "./sections/Techs/Techs";
import { Contact } from "./sections/Contact/Contact";

export function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Home />
        <About />
        <Techs />
        <Projects />
        <Contact />
      </div>
    </>
  )
}