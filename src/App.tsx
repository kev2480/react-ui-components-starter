import {
  BrowserRouter as Router
} from "react-router-dom";
import Routes from "routes";

const App = () => {
  return (
    <main className="App">
      <Router>
        <Routes />
      </Router>
    </main>
  );
}

export default App;
