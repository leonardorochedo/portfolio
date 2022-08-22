import { Home } from "./pages/Home/Home";
import { Header } from './components/Header/Header';
import { Waves } from "./components/Waves/Waves";
import { ModalContact } from "./components/ModalContact/ModalContact";
import { ButtonContact } from "./components/ButtonContact/ButtonContact";

export function App() {

  return (
    <>
      <Header />
      <Home />
      <ButtonContact />
      <Waves />
    </>
  )
}