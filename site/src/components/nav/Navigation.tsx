import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import themes from "./themes.json";

export interface NavigationProps {}

export interface NavigationState {
    defaultTheme: string | null;
}

class Navigation extends Component<NavigationProps, NavigationState> {
    constructor(props: NavigationProps) {
        super(props);

        const theme = window.escape(window.localStorage.getItem("theme") || ""); // The localStorage can't be trusted
        if (!Array.from(document.body.classList).some((item) => item.startsWith("theme-")) && theme) {
            document.body.classList.add("theme-" + theme);
        }
        this.state = { defaultTheme: theme };
    }
    componentDidMount() {}
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="button">
                            Create
                        </Link>
                    </li>
                    <li>
                        <div className="right">
                            <label htmlFor="theme-selector">Color theme:</label>
                            <select
                                name="theme-selector"
                                id="theme-selector"
                                defaultValue={this.state.defaultTheme || undefined}
                                onChange={(event) => {
                                    document.body.classList.forEach((item) => {
                                        
                                        if (item.startsWith("theme-")) document.body.classList.remove(item);
                                    });
                                    const new_item = window.escape(event.currentTarget.value);
                                    document.body.classList.add("theme-" + new_item);
                                    window.localStorage.setItem("theme", new_item);
                                }}
                            >
                                {themes.map((theme, i) => (
                                    <option value={theme.id} key={i}>
                                        {theme.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
