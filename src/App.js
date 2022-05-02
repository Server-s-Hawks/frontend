import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "./routes/userRoutes";

function App() {
  return (
    <>
      <Router>
        <PageRoutes />
      </Router>
    </>
  );
}

export default App;