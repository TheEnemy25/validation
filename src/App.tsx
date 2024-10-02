import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import MainPage from './pages/main/MainPage';
import Footer from './components/footer/Footer';

const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </Router>
  );

};

export default App;
