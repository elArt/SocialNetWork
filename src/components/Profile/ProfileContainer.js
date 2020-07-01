import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { withRouter, Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 7486;
    }
  
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {  profile: state.profilePage.profile,
            isAuth: state.auth.isAuth,
            status: state.profilePage.status
  };
};


export default compose (connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
                               (withRouter), (withAuthRedirect))
                               (ProfileContainer)