import { useState } from "react";
import Card from "../card/Card";
import RatingScore from "../rating-score/RatingScore";
import Star from "../star/Star";
import './RateUs.scss';

function RateUs({ onSubmitted , maxScore }) {
    const [score, setScore] = useState();

    const onSubmit = () => {
        if (onSubmitted)
            onSubmitted(score);
    }

    const scoreChanged = (score) => {
        setScore(score);
    }
    return (
        <div className="RateUs">
            <Card>
                <Star />
                <h2 className="title">How did we do?</h2>
                <p>
                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                </p>
                <RatingScore maxScore={maxScore} onScoreChange={scoreChanged} />
                <button onClick={onSubmit}>SUBMIT</button>
            </Card>
        </div>
    );
}

export default RateUs;