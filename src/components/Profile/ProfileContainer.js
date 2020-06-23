import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter, Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
  
    this.props.getUserProfile(userId)
  }
  render() {
    
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {  profile: state.profilePage.profile,
            isAuth: state.auth.isAuth
  };
};

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const ProfileContainerWithRouter = withRouter(AuthRedirectComponent);

export default connect(
  mapStateToProps,
  { getUserProfile }
)(ProfileContainerWithRouter);
