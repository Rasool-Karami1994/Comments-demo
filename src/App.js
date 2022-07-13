import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayOut from "./layout/LayOut";
import routes from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <LayOut>
        <Routes>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Routes>
      </LayOut>
      <ToastContainer />
    </>
  );
}

export default App;
