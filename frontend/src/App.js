import { BrowserRouter, Route, Routes} from "react-router-dom"

import './App.css';
import WebLayout from "./component/weblayout";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={ <WebLayout />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
