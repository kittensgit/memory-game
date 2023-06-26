import './App.css';
import Images from './Images';
import { useState } from 'react';

function App() {

  const [cards, setCards] = useState([...Images, ...Images])

  return (
    <div className='board'>
      {cards.map((card, index) => (
        <div className='card-outer'>
          <div className='card'>
            <div className='front'>
              <img src={card} />
            </div>
            <div className='back'></div>
          </div>
        </div>
      ))}
    </div>

  );
}

export default App;
