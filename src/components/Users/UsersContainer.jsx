import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
} from "./../../redux/users-reducer";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
     this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  changePage = (page) => {
    this.props.getUsers(page, this.props.pageSize);
  };
  render() {
    return (
      <Users {...this.props} changePage = {this.changePage}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetchingValue: state.usersPage.isFetchingValue,
    followingInProgress: state.usersPage.followingInProgress,
  };
};


// export default connect(
//   mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers
// })(UsersContainer);

export default compose(connect(
  mapStateToProps, 
  {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers
}))(UsersContainer)