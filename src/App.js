import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import { movieRoutes } from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {movieRoutes.map(({url,component},index)=>{
          return <Route path={url} element={component} key={index}/>
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
