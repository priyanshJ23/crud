import { Route } from "react-router-dom";
import { Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Pages/Home";

import Edit from "./Components/Students/Edit";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/View/:id" element={<View />} /> */}
          <Route exact path="/Edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
