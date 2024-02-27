import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";

const App = () => {
  return (
    <Router>
      <Route path="/create-job" component={CreateJob} />
      <Route path="/my-jobs" component={MyJobs} />
    </Router>
  );
};

export default App;
