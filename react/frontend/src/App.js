import { useState } from 'react';
import './App.css';

function App() {
  const [idea, setIdea] = useState('');
  const [ideas, setIdeas] = useState([]);

  const addIdea = idea => {
    setIdeas([...ideas, idea]);
  };

  const deleteIdea = index => {
    const newIdeas = [...ideas];
    newIdeas.splice(index, 1);
    setIdeas(newIdeas);
  };

  return (
    <div className='App'>
      <h1>My React App</h1>

      <input type='text' placeholder='Enter an idea' onChange={ e => setIdea(e.target.value) } />
      <button onClick={ () => addIdea(idea) }>Add Idea</button>
      <ul>
      { ideas.map((idea, index) => (
        <li>
          { idea }
          <button onClick={ () => deleteIdea(index) }>Delete</button>
        </li>
      )) }
      </ul>

      <p>{ ideas.length } awesome ideas.</p>
      
    </div>
  );
}

export default App;
