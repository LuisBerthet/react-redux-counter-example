import React from "react";
import {connect} from "react-redux";

function Counter(props) {
    return <h4>{props.counter}</h4>
}

function mapStateToProps(state) {
    return {counter: state.counter}
}

export default connect(mapStateToProps)(Counter);
