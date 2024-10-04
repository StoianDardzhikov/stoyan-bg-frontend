import Menu from "./Menu";
import "./global.css";
import Landing from "./Landing";
import AboutMeLanding from "./AboutMeLanding";

function App() {
  return (
      <body>
        <div className="App">
            <Menu></Menu>
            <Landing></Landing>
            <AboutMeLanding></AboutMeLanding>
        </div>
      </body>
  );
}

export default App;
