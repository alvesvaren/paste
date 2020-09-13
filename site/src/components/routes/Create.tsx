import * as React from "react";
import { Component } from "react";

export interface CreateRouteProps {}

export interface CreateRouteState {}

class CreateRoute extends Component<CreateRouteProps, CreateRouteState> {
    constructor(props: CreateRouteProps) {
        super(props);
        this.state = {};
    }
    render() {
        return <div></div>;
    }
}

export default CreateRoute;
