import Errorpage from "./component/Errorpage";
import LinkPage from "./component/Linkpage";
import { Route, Routes } from "react-router-dom";
// import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <div>
          <Routes>
            <Route path="/" element={<LinkPage />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
          {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App;
