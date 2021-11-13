import { Component } from "react";

export class ShoppingListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>{this.props.item}</div>
        )
    }
}