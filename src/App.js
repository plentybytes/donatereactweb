import './App.css';
import './custom.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <Header></Header>
        <Content/>
    </div>
  );
}

export default App;
