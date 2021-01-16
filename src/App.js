import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
          imgUrl="https://thumbs.dreamstime.com/b/%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-%D0%BA%D0%BE%D1%82-%D1%81-%D0%B3%D0%BE%D0%BB%D1%83%D0%B1%D1%8B%D0%BC%D0%B8-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B0%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%BC-background-cute-white-kitten-blue-eyes-two-months-191904129.jpg"
          title="Card title"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          buttonGoText="Go Somewhere"
          url="#"/>
          <br/>
      <Card
          title="Special title treatment"
          text="With supporting text below as a natural lead-in to additional content."
          buttonGoText="Go Somewhere!"
          url="#"/>
    </div>
  );
}

export default App;
