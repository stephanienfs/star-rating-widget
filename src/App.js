import "./App.css";
import StarRating from "./widgets/StarRating";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Star Rating Widget</p>
      </header>
      <body className="App-body">
        <StarRating maxStars={5} filledStars={3} />
      </body>
    </div>
  );
}

export default App;
