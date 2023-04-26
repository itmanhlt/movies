import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { movieRoutes } from "./routes/Routes";
import Loading from "./Components/Loading/Loading";
import Trailer from "./Components/Trailer/Trailer";

function App() {
  return (
    <BrowserRouter>
      <Loading />
      <Trailer />
      <Routes>
        {movieRoutes.map(({ url, component }, index) => {
          return <Route path={url} element={component} key={index} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
