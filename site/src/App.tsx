import React from "react";
import "./app.scss";
import Navigation from "./components/nav/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateRoute from "./components/routes/Create";
import ViewRoute from "./components/routes/View";
import Lowlight from "./react-lowlight/Lowlight";
import highlightjs from "highlight.js";
export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {};
        highlightjs.listLanguages().forEach((lang) => {
            const langObj = highlightjs.getLanguage(lang);
            if (langObj && langObj.rawDefinition)
            Lowlight.registerLanguage(lang, langObj.rawDefinition);
        });
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
