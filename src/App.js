import Menu from "./Menu";
import "./global.css";
import Landing from "./Landing";
import AboutMeLanding from "./AboutMeLanding";

function App() {
  return (
    <div className="App">
        <Menu></Menu>
            <Landing></Landing>
            <AboutMeLanding></AboutMeLanding>
    </div>
  );
}

export default App;
