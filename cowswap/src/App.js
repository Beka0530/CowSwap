import MainContent from "./components/main-content/main-content";
import {useState} from "react";
import SelectModalWindow from "./components/select-modal-window/select-modal-window";

function App() {
    const [modalActive, setModalActive] = useState(true)
  return (
    <div className="app">
    <MainContent setActive={setModalActive} />
        <SelectModalWindow active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;
