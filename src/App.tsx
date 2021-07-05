import {
  BrowserRouter as Router
} from "react-router-dom";
import Routes from "routes";
import Nav from "components/ui/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <main className="App">
        <Router>
          <Routes />
        </Router>
      </main>
    </>
  );
}

export default App;
