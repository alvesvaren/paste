declare module "react-lowlight" {
    export interface LowlightMarker {
        line: number;
        className?: string;
    }

    function langFn(hljs?: HLJSApi): Language

    interface LowlightProps {
        language?: string;
        value: string;
        prefix?: string;
        subset?: string[];
        inline?: boolean;
        markers?: number[] | LowlightMarker[];
        className?: string;
    }

    export default class Lowlight extends React.Component<LowlightProps> {
        public static registerLanguage(name: string, syntax: langFn | undefined): void;
        public static hasLanguage(name: string): boolean;
    }
}
