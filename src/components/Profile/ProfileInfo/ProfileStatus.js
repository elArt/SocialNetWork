import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';


class ProfileInfo extends React.Component {
    state = {
        editStatus: false,
        status: this.props.status,
    }
    acriveEditingStatus = () => {
        this.setState({
            editStatus:true
        })
    }
    unacriveEditingStatus = () => {
        this.setState({
            editStatus:false
        })
        this.props.updateStatus(this.state.status)
    }

    changedStatus = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editStatus ? <span onDoubleClick = {this.acriveEditingStatus}>{this.state.status ||'status not active'}</span>
                :<input type={Text} onChange={this.changedStatus} value = {this.state.status} onBlur= {this.unacriveEditingStatus}></input>}
            </div>
        )
    }
}

export default ProfileInfo;