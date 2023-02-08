import Card from '../card/Card';
import './ThankYou.scss';

function ThankYou({ rateScore, maxScore }) {
    return (
        <div className="ThankYou">
            <Card>
                <img src="./images/illustration-thank-you.svg" alt="thanks" />
                <span className="rate-score">You selected {rateScore} out of {maxScore}</span>
                <h2 className='title'>
                    Thank you!
                </h2>
                <p>
                    We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
                </p>
            </Card>

        </div>
    );
}

export default ThankYou;