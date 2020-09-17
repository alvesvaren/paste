import * as React from "react";
import { Component } from "react";
import lowlight from "lowlight";
import Lowlight from "react-lowlight";
import highlight from "highlight.js";

export interface ViewRouteProps {}

export interface ViewRouteState {
    lang?: string;
    code: string;
}

class ViewRoute extends Component<ViewRouteProps, ViewRouteState> {
    constructor(props: ViewRouteProps) {
        super(props);
        this.state = { lang: undefined, code: "if __name__ == \"__main__\":\n    print('Hello world!')" };
        
        
    }

    componentDidUpdate() {
        
    }

    renderCode() {
        return <Lowlight value={this.state.code} language={this.state.lang} className="view-root" />;
    }

    render() {
        return <div className="view-root">{this.renderCode()}</div>;
    }
}

export default ViewRoute;
