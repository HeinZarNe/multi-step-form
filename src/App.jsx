import React from "react";
import { Route, Routes } from "react-router-dom";

import Container from "./components/Container";
import Main from "./components/Main Page";
import StepOne from "./components/Main Page/StepOne";
import StepTwo from "./components/Main Page/StepTwo";
import StepThree from "./components/Main Page/StepThree";
import StepFour from "./components/Main Page/StepFour";
import FinalPage from "./components/Main Page/FinalPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route path="/" element={<Main />}>
          <Route path="1" element={<StepOne />} />
          <Route path="2" element={<StepTwo />} />
          <Route path="3" element={<StepThree />} />
          <Route path="4" element={<StepFour />} />
          <Route path="final" element={<FinalPage />} />
          <Route path="*" element={<div>Error</div>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
