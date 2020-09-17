// export function lineNumberify(ast) {
//     var lineNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
//     return ast.reduce(
//         (result, node) => {
//             if (node.type === "text") {
//                 if (node.value.indexOf("\n") === -1) {
//                     node.lineNumber = lineNumber = lineNumber;
//                     result.nodes.push(node);
//                     return result;
//                 }

//                 var lines: string[] = node.value.split("\n");
//                 lines.forEach((line, i) => {
//                     result.push({
//                         type: "text",
//                         value: i === lines.length - 1 ? line : line + "\n",
//                         lineNumber: i === 0 ? lineNumber : ++lineNumber,
//                     });
//                 });
//                 result.lineNumber = lineNumber;
//                 return result;
//             }

//             if (node.children) {
//                 node.lineNumber = lineNumber;
//                 const processed = lineNumberify(node.children, lineNumber);
//                 node.children = processed.nodes;
//                 result.lineNumber = processed.lineNumber;
//                 result.nodes.push(node);
//                 return result;
//             }

//             result.nodes.push(node);
//             return result;
//         },
//         { nodes: [], lineNumber: lineNumber }
//     );
// }

// function wrapLinkes(ast, markers, options) {
//     var i = 0;
//     var wrapped = markers.reduce((nodes, marker) => {
//         var line = marker.line;
//         var children = [];
//         for (; i < ast.length; i++) {
//             if (ast[i].lineNumber < line) {
//                 nodes.push(ast[i]);
//                 continue;
//             }

//             if (ast[i].lineNumber === line) {
//                 children.push(ast[i]);
//                 continue;
//             }

//             if (ast[i].lineNumber > line) {
//                 break;
//             }
//         }

//         nodes.push({
//             type: "element",
//             tagName: "div",
//             properties: { className: [marker.className || options.prefix + "marker"] },
//             children: children,
//             lineNumber: line,
//         });

//         return nodes;
//     }, []);

//     for (; i < ast.length; i++) {
//         wrapped.push(ast[i]);
//     }

//     return wrapped;
// }
export default null;