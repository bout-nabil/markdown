import './App.css';
import Textarea from './Textarea';

function App() {
  return (
    <div className="App">
      <div className='container'>
          <div>
            <h1 id='title'>Markdown Previewer</h1>
          </div>
          <div className='edit-prev'>
            <Textarea />
          </div>
          <footer>2023 Coded by Boutachrafine Nabil</footer>
        </div>
    </div>
  );
}

export default App;