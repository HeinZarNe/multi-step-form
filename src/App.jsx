import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main Page";
import StepOne from "./components/Main Page/StepOne";
import StepTwo from "./components/Main Page/StepTwo";
import StepThree from "./components/Main Page/StepThree";
import StepFour from "./components/Main Page/StepFour";
import FinalPage from "./components/Main Page/FinalPage";
import Container from "./components/Container";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="/" element={<Main />}>
            <Route index path="/1" element={<StepOne />} />
            <Route path="/2" element={<StepTwo />} />
            <Route path="/3" element={<StepThree />} />
            <Route path="/4" element={<StepFour />} />
            <Route path="/final" element={<FinalPage />} />
            <Route path="*" element={<>Error</>} />
          </Route>
        </Route>
        <Route path="*" element={<></>} />
      </Routes>
    </>
  );
};

export default App;
