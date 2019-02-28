import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

function ButtonDecrement(props) {
    return <button type={"button"} onClick={() => props.inc()}>+</button>
}


function decrementCounter() {
    return {
        type: 2,
        payload: null
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({inc: incrementCounter}, dispatch)
}

export default connect(undefined, mapDispatchToProps)(ButtonDecrement);


