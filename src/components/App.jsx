import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
//--------------------------------------------------------------------//

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };
  const handlerBtn = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(ps => ps + 1);
        break;
      case 'neutral':
        setNeutral(ps => ps + 1);
        break;
      case 'bad':
        setBad(ps => ps + 1);
        break;
      default:
        return;
    }
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handlerBtn}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good * 100) / this.countTotalFeedback());
//   };

//   handlerBtn = e => {
//     const { name } = e.target;
//     this.setState(ps => {
//       return { [name]: ps[name] + 1 };
//     });
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handlerBtn}
//           ></FeedbackOptions>
//         </Section>
//         <Section title="Statistics">
//           {!this.countTotalFeedback() ? (
//             <Notification message="There is no feedback"></Notification>
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

export { App };
