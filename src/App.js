import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Order from './components/Order/Order';
import { makeStyles } from "@material-ui/styles";
import GoodsContainer from "./components/Goods/GoodsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import BasketContainer from "./components/Basket/BasketContainer";

const useStyles = makeStyles({
  appContent: {
    paddingTop: "20px",
    paddingLeft: "40px",
    paddingRight: "40px",
  }
});

function App() {

  const classes = useStyles();
  return (
    <React.Fragment>
      <HeaderContainer/>
      <div className={classes.appContent}>
        <Switch>
          <Route exact path='/' render={(props) => <GoodsContainer {...props} />} />
          <Route path='/basket' render={(props) => <BasketContainer {...props} />} />
          <Route path='/order' render={(props) => <Order {...props} />} />
          <Route path='*' render={() => <div>404 Not Found</div>} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
