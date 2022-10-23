import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Service from './components/service';
import Icon from './components/iconFR';
import Info from './components/info';
import Portofolio from './components/portofolio';
import Testimonial from './components/testimonial';
import Partner from './components/partnership';
import Notice from './components/notice';
import Footer from './components/footer';
import Login from './components/login';
import Results from './components/results';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
      <Service />
      <Icon />
      <Info />
      <Portofolio />
      <Testimonial />
      <Partner />
      <Notice />
      <Footer />
    </div>
  );
}

export default App;
