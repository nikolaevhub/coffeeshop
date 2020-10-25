import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import Order from './pages/Order/Order';
import {makeStyles} from "@material-ui/core/styles";
import Goods from "./pages/Goods/Goods";
import Basket from "./pages/Basket/Basket";
import Header from "./components/common/Header/Header";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
    appContent: {
        padding: theme.spacing(2.4, 5, 0, 5),
    }
}));

function App() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Suspense fallback={<CircularProgress color="secondary"/>}>
                <Header/>
                <div className={classes.appContent}>
                    <Switch>
                        <Route exact path='/' component={Goods}/>
                        <Route path='/basket' component={Basket}/>
                        <Route path='/order' component={Order}/>
                        <Route path='*' render={() => <div>404 Not Found</div>}/>
                    </Switch>
                </div>
            </Suspense>
        </React.Fragment>
    );
}

export default App;
