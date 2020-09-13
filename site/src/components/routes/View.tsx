import * as React from "react";
import { Component } from "react";
import lowlight from 'lowlight';

export interface ViewRouteProps {}

export interface ViewRouteState {
    lang?: string,
    code: string
}

class ViewRoute extends Component<ViewRouteProps, ViewRouteState> {
    constructor(props: ViewRouteProps) {
        super(props);
        this.state = {lang: undefined, code: ""};
    }

    renderCode() {
        
        if (this.state.lang) {
            var thing = lowlight.highlight(this.state.lang, this.state.code);
        } else {
            thing = lowlight.highlightAuto(this.state.code);
        }
        return thing.value.map((item) => {return null
            
        })
    }

    render() {
        return <div></div>;
    }
}

export default ViewRoute;
