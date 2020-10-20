import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Order from './pages/Order/Order';
import {makeStyles} from "@material-ui/styles";
import Goods from "./pages/Goods/Goods";
import Basket from "./pages/Basket/Basket";
import Header from "./components/common/Header/Header";

const useStyles = makeStyles(theme => ({
    appContent: {
        padding: theme.spacing(2.4, 5, 0, 5),
    }
}));

function App() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Header/>
            <div className={classes.appContent}>
                <Switch>
                    <Route exact path='/' render={() => <Goods/>}/>
                    <Route path='/basket' render={() => <Basket/>}/>
                    <Route path='/order' render={() => <Order/>}/>
                    <Route path='*' render={ () => <div>404 Not Found</div>}/>
                </Switch>
            </div>
        </React.Fragment>
    );
}

export default App;
