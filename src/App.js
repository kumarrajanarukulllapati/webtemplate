import logo from './logo.svg';
import logo13234 from './images/icons.png';
import './App.css';
import Header from './components/Header';
import ArchitectureComponent from './components/Architecture';
import PlanningComponent from './components/Planning';
import AboutComponent from './components/About';


function App() {
  return (
    <div className="App">
      <Header />
      <ArchitectureComponent />
      <PlanningComponent />
      <AboutComponent />
    </div>
  );
}

export default App;
