// import logo from './logo.svg';
// import logo13234 from './images/icons.png';
import './App.css';
import Header from './components/Header';
import ArchitectureComponent from './components/Architecture';
import PlanningComponent from './components/Planning';
import AboutComponent from './components/About';
import DesignComponent from './components/design';
import ExecutionComponent from './components/Execution';
import VisionComponent from './components/Vision';
import FooterComponent from './components/Footer';
import FinalComponent from './components/final';


function App() {
  return (
    <div className="App" >
      <Header />
      <ArchitectureComponent />
      <PlanningComponent />
      <AboutComponent />
      <DesignComponent />
      <ExecutionComponent />
      <VisionComponent />
      <FooterComponent />
      <FinalComponent />
    </div>
  );
}

export default App;
