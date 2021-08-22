import { HashRouter, Route, Switch } from 'react-router-dom';
import CashDesk from 'Pages/CashDesk/CashDesk';
import List from 'Pages/List/List';
import Product from 'Pages/Product/Product';
import Rublo from 'Pages/Rublo/Rublo';
import Sales from 'Pages/Sales/Sales';
import Sell from 'Pages/Sell/Sell';
import Statistics from 'Pages/Statistics/Statistics';
import Stock from 'Pages/Stock/Stock';

import styles from './App.module.css';

const App = (): JSX.Element => {
  return (
    <div className={styles.App}>
      <HashRouter>
        <Switch>
          <Route exact component={List} path="/" />
          <Route component={Product} path="/product" />
          <Route component={CashDesk} path="/cashdesk" />
          <Route component={Rublo} path="/rublo" />
          <Route component={Sales} path="/sales" />
          <Route component={Sell} path="/sell" />
          <Route component={Statistics} path="/statistics" />
          <Route component={Stock} path="/stock" />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
