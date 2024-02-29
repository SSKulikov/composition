import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="card-container">
      <Card img="https://img.freepik.com/free-photo/view-cooked-crawfish_23-2150426277.jpg?w=996&t=st=1709176969~exp=1709177569~hmac=3fa055c6e61cbe8bcff65e449896d40b23f896be4f93d0a4b223f5bf8cd7e6ae">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </Card>
      <Card>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </Card>
    </div>
  );
}

export default App;