import * as React from "react";

export function mapChild(child: any, i: any, depth: any): JSX.Element {
    if (child.tagName) {
        return React.createElement(
            child.tagName,
            assign({ key: "lo-" + depth + "-" + i }, child.properties),
            child.children && child.children.map(mapWithDepth(depth + 1))
        );
    }

    return child.value;
}

export default function mapWithDepth(depth: any) {
    return function mapChildrenWithDepth(child: any, i: any) {
        return mapChild(child, i, depth);
    };
}

function assign(dst: any, src: any) {
    for (var key in src) {
        dst[key] = src[key];
    }
    return dst;
}
