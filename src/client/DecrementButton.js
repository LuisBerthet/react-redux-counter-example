import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

function ButtonDecrement(props) {
    return <button type={"button"} onClick={() => props.dec()}>-</button>
}


function decrementCounter() {
    return {
        type: 2,
        payload: null
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({dec: decrementCounter}, dispatch)
}

export default connect(undefined, mapDispatchToProps)(ButtonDecrement);

