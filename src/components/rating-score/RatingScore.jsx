import { useState } from 'react';
import './RatingScore.scss';
const MAX_SCORE = 5;

function RatingScore({ maxScore, onScoreChange }) {
    const [selectedScore, setSelectedScore] = useState();
    const onSelectScore = (score) => { 
        setSelectedScore(score);
        if(onScoreChange){
            onScoreChange(score);
        }
    }
    return (
        <div className="RatingScore">
            {
                <ol className='score-list'>
                    {
                        Array.from({ length: maxScore || MAX_SCORE }, (_, i) => {
                            const score = i + 1;
                            return <li className={`score${selectedScore === score ? ' selected' : ''}`} key={score} onClick={()=>{onSelectScore(score)}}>
                                <button>
                                    {score}
                                </button>
                            </li>;
                        })
                    }
                </ol>

            }
        </div>

    );
}

export default RatingScore;