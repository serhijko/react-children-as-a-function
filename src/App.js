import React from 'react';
import Amount from './components/Amount';
import Euro from './components/Euro';
import Pound from './components/Pound';

const App = () => (
  <Amount
    renderAmountOne={amount => (
      <div>
        <h2>My one Amount</h2>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
    renderAmountTwo={amount => (
      <div>
        <h2>My other Amount</h2>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
  />
);

export default App;
