import * as React from "react";
import { Component } from "react";
import Lowlight from "../../react-lowlight/Lowlight";

export interface CreateRouteProps {}

export interface CreateRouteState {
    code: string;
    xScroll: number;
}

class CreateRoute extends Component<CreateRouteProps, CreateRouteState> {
    codeRef = React.createRef<HTMLElement>();

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
                        wrap="soft"
                        placeholder="Enter text here..."
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        onScrollCapture={(e) => {
                            // this.setState({ xScroll: e.currentTarget.scrollLeft });
                            if (this.codeRef.current) {
                                this.codeRef.current.scrollLeft = e.currentTarget.scrollLeft;
                            }
                        }}
                        onChangeCapture={(e) => {
                            e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
                            if (this.codeRef.current) {
                                this.codeRef.current.style.height = e.currentTarget.style.height;
                            }

                            this.setState({ code: e.currentTarget.value });
                        }}
                    />

                    <Lowlight codeElementRef={this.codeRef} value={this.state.code} />
                </div>
            </div>
        );
    }
}

export default CreateRoute;
