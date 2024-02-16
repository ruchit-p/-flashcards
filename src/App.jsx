import './App.css';
import Flashcard from './components/Flashcard';

const App = () => {
  return (
    <div className="App">
      <div className="heading">
        <h2>Entrepreneur's Blueprint: Key Insights for Business Success</h2>
        <h5>Explore essential concepts for entrepreneurial success, from marketing strategies to personal traits, in this concise, impactful flashcard set.</h5>
        <p>Total Cards in this Set: 10</p>
      </div>
      
      <div className="flashcard-container">
        <Flashcard />
      </div>
    </div>
  )
}

export default App