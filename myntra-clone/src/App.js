import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import AllRoutes from './pages/AllRoutes';
function App() {
  return (
    <div className="App">
       <Navbar/>
       <div style={{marginTop:"100px"}}>
       <AllRoutes/>
       </div>
      <Footer/>
    </div>
  );
}

export default App;
