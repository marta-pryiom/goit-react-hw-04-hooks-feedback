import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import Container from '../Container';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const optionsbtn = [good, neutral, bad];
  // const optionValue = Object.keys(optionsbtn);

  const onLeaveFeedback = e => {
    switch (e) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const allReviews = countTotalFeedback();
    const positivePersent = good;
    return good ? Math.ceil((positivePersent / allReviews) * 100) : 0;
  };

  // const { good, neutral, bad } = this.state;
  // const { onLeaveFeedback } = this;
  // const totalFn = countTotalFeedback();
  // const PositiveFn = countPositiveFeedbackPercentage();
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Container>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback = e => {
//     const currentEl = e.target.value;
//     this.setState(prev => {
//       return {
//         ...prev,
//         [currentEl]: prev[currentEl] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const allReviews = this.countTotalFeedback();
//     const positivePersent = this.state.good;
//     return this.state.good
//       ? Math.ceil((positivePersent / allReviews) * 100)
//       : 0;
//   };
//   render() {
//     const optionValue = Object.keys(this.state);
//     const { good, neutral, bad } = this.state;
//     const { onLeaveFeedback } = this;
//     const totalFn = this.countTotalFeedback();
//     const PositiveFn = this.countPositiveFeedbackPercentage();
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={optionValue}
//             onLeaveFeedback={onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={totalFn}
//             positivePercentage={PositiveFn}
//           />
//         </Section>
//       </Container>
//     );
//   }
// }

export default App;
