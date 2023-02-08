import { useState } from 'react';
import './App.css';
import RateUs from './components/rate-us/RateUs';
import ThankYou from './components/thank-you/ThankYou';

const MAX_SCORE = 5;

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(true);

  const onRateSubmitted = (score) => {
    setIsSubmitted(true);
    setScore(score);
  }
  return (
    <div className="App">
      <main>
        <section className='content'>
          <div className="container">
            {
              !isSubmitted ?
                <RateUs onSubmitted={onRateSubmitted} maxScore={MAX_SCORE} /> : <ThankYou rateScore={score} maxScore={MAX_SCORE} />
            }

          </div>
        </section>

      </main>


    </div>
  );
}

export default App;
