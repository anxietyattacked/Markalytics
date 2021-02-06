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
import BlogScreen from "./screens/BlogScreen"
import BlogArticle from "./screens/BlogArticle";
import BlogVideo from "./screens/BlogVideo";
import articleContent from "./components/Blog/articleContent";


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
      <Route exact path="/blog/video-1"><BlogVideo 
      src={"https://www.youtube.com/embed/CUaybv1jdHw"}
      width={width}
      title={"Relaxing Snow Footage"}
      />
      
      </Route>
      <Route exact path="/blog/video-2"><BlogVideo 
      src={"https://www.youtube.com/embed/PC1XCR8r8sY"}
      width={width}
      title={"Relax and Explore the Ocean"}
      />
      </Route>
      <Route exact path="/blog/video-3"><BlogVideo 
      src={"https://www.youtube.com/embed/XhMVWzVXNNk"}
      width={width}
      title={"The Secret Behind Coca-Cola Marketing Strategy"}
      />
      
      </Route>
      <Route exact path="/blog/video-4"><BlogVideo 
      src={"https://www.youtube.com/embed/WNCl-69POro"}
      width={width}
      title={"Enjoy the Relaxing Sight and Sounds of a River"}
      />
      </Route>
      <Route exact path="/blog/our-story"><BlogArticle 
      width={width} 
      title={articleContent[0].title}
      src={articleContent[0].src}
      src2={articleContent[0].src2}
      by={articleContent[0].by}
      content={articleContent[0].content}
      /></Route>
      <Route exact path="/blog/breathe-slow-down"><BlogArticle 
      width={width}
      title={articleContent[1].title}
      src={articleContent[1].src}
      src2={articleContent[1].src2}
      by={articleContent[1].by}
      content={articleContent[1].content}
  
      /></Route>
      <Route path="/blog" component={BlogScreen}/>
      
      </Switch>
    </main>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
