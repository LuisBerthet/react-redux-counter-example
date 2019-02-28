import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

function ButtonIncrement(props) {
    return <button type={"button"} onClick={() => props.inc()}>+</button>
}


function incrementCounter() {
    return {
        type: 1,
        payload: null
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({inc: incrementCounter}, dispatch)
}

export default connect(undefined, mapDispatchToProps)(ButtonIncrement);

