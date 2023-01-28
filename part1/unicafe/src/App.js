import { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;

  const StatisticLine = ({ text, value }) => {
    return (
      <>
        {text === 'positive' ? (
          <tr>
            <td>{text}</td>
            <td>
              {value}
              {' %'}
            </td>
          </tr>
        ) : (
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        )}
      </>
    );
  };

  const Statistics = ({ good, bad, neutral, all }) => {
    return (
      <>
        <table>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={all} />
            <StatisticLine text='average' value={(good - bad) / all} />
            <StatisticLine text='positive' value={(good / all) * 100} />
          </tbody>
        </table>
      </>
    );
  };

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>statistics</h2>
      {!all ? (
        <p>No feedback given</p>
      ) : (
        <Statistics good={good} bad={bad} neutral={neutral} all={all} />
      )}
    </div>
  );
};

export default App;
