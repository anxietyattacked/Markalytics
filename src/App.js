import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import {useState,useEffect} from "react"
import Footer from './components/Footer';
import Hamburger from "./components/Hamburger";
import Header from './components/Header';
import ScrollToTop from "./components/ScrollToTop";
import AboutUsScreen from "./screens/AboutUsScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import BlogScreen from "./screens/BlogScreen";
import BlogScreen2 from "./screens/BlogScreen2"


function App() {
  const [width, setWidth] = useState(window.innerWidth);
function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

let isMobile = (width <= 768);
  return (
    
    <BrowserRouter>
    <ScrollToTop/>
    {isMobile ? <Hamburger/> : <Header/>}
    <main>
    <Switch>
      <Route exact path="/" component={HomeScreen}/>
      <Route path="/about" component={AboutUsScreen}/>
      <Route path="/product" component={ProductScreen}/>
      <Route path="/blog" component={BlogScreen2}/>
      </Switch>
    </main>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
