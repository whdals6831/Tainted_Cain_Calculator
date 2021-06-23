import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return <HashRouter>
    <Route path="/" basename={process.env.PUBLIC_URL} exact={true} component={Home} />
  </HashRouter>;
}

export default App;