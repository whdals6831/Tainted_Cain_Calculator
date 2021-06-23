import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return <HashRouter basename={process.env.PUBLIC_URL}>
    <Route path="/" exact={true} component={Home} />
  </HashRouter>;
}

export default App;