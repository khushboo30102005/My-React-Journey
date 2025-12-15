import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Grocery from './pages/Grocery';
import Clothes from './pages/Clothes';
import Courses from './pages/Courses';
import CoursesDetails from './pages/CoursesDetails';
import NavBar2 from './components/NavBar2';

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <NavBar />
      <NavBar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/courses/:id' element={<CoursesDetails/>} />
        <Route path="/product" element={<Product />}>
          <Route path="grocery" element={<Grocery />} />
          <Route path="clothes" element={<Clothes />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
