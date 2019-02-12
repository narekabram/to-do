import * as React from "react";

import "./cart.scss";
import {connect} from "react-redux";

class Cart extends React.Component <any> {

    render() {
        return (
            <div className="container cart">
                <h3>{this.props.cart.title}</h3>
                <div>{this.props.cart.description}</div>
            </div>
        );
    }
}

export default connect()(Cart);