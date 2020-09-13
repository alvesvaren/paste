import React from "react";
import "./app.scss";
import Navigation from "./components/nav/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateRoute from "./components/routes/Create";
import ViewRoute from "./components/routes/View";

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {};
        
    }
    render() {
        
        return (
            <div className="app">
                <Router>
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={CreateRoute} />
                        <Route path="/view/:key" component={ViewRoute} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
