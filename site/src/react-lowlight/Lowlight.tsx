import * as React from "react";
import { Component } from "react";
import low from "lowlight";
import CSS from "csstype";
// import addMarkers from "./src/addMarkers";
import mapWithDepth from "./mapChildren";

export interface LowlightMarker {
    line: number;
    className?: string;
}

export interface LowlightProps {
    language?: string;
    value: string;
    prefix?: string;
    subset?: string[];
    inline?: boolean;
    markers?: number[] | LowlightMarker[];
    className?: string;
    xScrollValue?: number;
}

interface CodeProps {
    className?: string;
    style?: CSS.Properties;
}

class Lowlight extends Component<LowlightProps> {
    static registeredLanguages = 0;

    constructor(props: LowlightProps) {
        super(props);
    }

    static registerLanguage(name: string, syntax: ((hljs?: HLJSApi) => Language)) {
        this.registeredLanguages++;
        low.registerLanguage.apply(low, [name, syntax])
    }

    render() {
        if (process.env.NODE_ENV !== "production") {
            if (!this.props.language && Lowlight.registeredLanguages === 0) {
                console.warn("No language definitions seems to be registered, " + "did you forget to call `Lowlight.registerLanguage`?");
            }
        }
        console.log("test");
        var result = this.props.language
            ? low.highlight(this.props.language, this.props.value, { prefix: this.props.prefix || 'hljs-' })
            : low.highlightAuto(this.props.value, { prefix: this.props.prefix || 'hljs-', subset: this.props.subset });
        var codeProps: CodeProps = result.language ? { className: "hljs " + result.language } : { className: "hljs" };

        if (this.props.inline) {
            codeProps.style = { display: "inline" };
            codeProps.className = this.props.className || "lowlight";
        }

        var ast = result.value;
        if (this.props.markers && this.props.markers.length > 0) {
            throw Error("Not implemented");
            //ast = addMarkers(ast, {prefix: this.props.prefix, markers: this.props.markers});
        }

        var value = ast.length === 0 ? this.props.value : ast.map(mapWithDepth(0));

    const code = <code {...codeProps}>{value}</code>;
        if (this.props.inline) {
            return code;
        }
        return <pre className={this.props.className || "lowlight"}>{code}</pre>;
    }
}

export default Lowlight;
