import * as React from "react";
import { Component } from "react";
import Lowlight from "../../react-lowlight/Lowlight";

export interface CreateRouteProps {}

export interface CreateRouteState {
    code: string;
    xScroll: number;
}

class CreateRoute extends Component<CreateRouteProps, CreateRouteState> {
    constructor(props: CreateRouteProps) {
        super(props);
        this.state = { code: "", xScroll: 0 };
    }
    render() {
        return (
            <div className="create-root">
                <div className="create-wrapper">
                    <textarea
                        id="code-enter-field"
                        placeholder="Enter text here..."
                        spellCheck="false"
                        onScroll={(e) => {
                            this.setState({ xScroll: e.currentTarget.scrollLeft });
                        }}
                        onChange={(e) => this.setState({ code: e.currentTarget.value })}
                    />

                    <Lowlight xScrollValue={this.state.xScroll} value={this.state.code} />
                </div>
            </div>
        );
    }
}

export default CreateRoute;
