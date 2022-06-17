import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "./routes/userRoutes";

function App() {
  axios.defaults.baseURL = "http://localhost:5000/"
  return (
    <>
      <Router>
        <PageRoutes />
      </Router>
    </>
  );
}

export default App;