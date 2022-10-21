import {Routes, Route} from 'react-router-dom';
import Header from './Header';
import Featured from './Featured'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About';
import Footer from './Footer';
import Search from './pages/Search';
import Post from './pages/Post';
import Product from './pages/Slug'


function App() {
  return (
    <div className='wrapper' >
      <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/Post' element={<Post />} />
        <Route path="/:slug" element={<Product />} />
      </Routes>
      <Footer />
      </>
    </div>
  );
}

export default App;
