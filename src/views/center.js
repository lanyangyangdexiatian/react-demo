import React, { Component } from 'react'
import { connect } from 'react-redux'


class Center extends Component {
	constructor(props,context){
	    super(props,context);
	}
    render() {
        return (<div>个人中心</div>)
    }
}


const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Center)
