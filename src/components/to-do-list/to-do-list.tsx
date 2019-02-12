import * as React from "react";
import Cart from "../cart/cart";

import "./to-do-list.scss";
import {connect} from "react-redux";
import {login} from "../../actions/login-action";

const mapStateToProps = (state: any) => ({
    ...state
});

const mapDispatchToProps = {
    login
};

class ToDoList extends React.Component <any, {carts: any[]}> {

    constructor(props: any) {
        super(props);

        this.state = {
            carts: [{
                title: 'test 1',
                id: 1,
                description: 'some description about cart 1'
            },
            {
                title: 'test 2',
                id: 2,
                description: 'some description about cart 2'
            },
            {
                title: 'test 3',
                id: 3,
                description: 'some description about cart 3'
            },
            {
                title: 'test 4',
                id: 4,
                description: 'some description about cart 4'
            }]
        };
    }

    render() {
        return (
            <div className="to-do-list">
                 <button onClick={this.loginAction}>Test redux action</button>
                <pre>{JSON.stringify(this.props)}</pre>
                 {this.state.carts.map(cart => <Cart key={cart.id} cart={cart}/>)}
            </div>
        );
    }

    loginAction = (event: any) => {
        this.props.loginAction();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);