import moment from "moment";
import "./App.css";

import Calender from "./components/Calender";

const App = () => {
  return (
    <div className="container">
      <Calender date={moment("05/03/2024", "DD/MM/YYYY")} />
    </div>
  );
};

export default App;
