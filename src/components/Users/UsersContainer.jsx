import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  isFatchingFunc,
} from "./../../redux/users-reducer";
import * as axios from "axios";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.isFatchingFunc(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${
          this.props.currentPage
        }&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.isFatchingFunc(false);
      });
  }

  changePage = (page) => {
    this.props.setCurrentPage(page);
    this.props.isFatchingFunc(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${
          this.props.pageSize
        }`
      )
      .then((response) => {
        this.props.isFatchingFunc(false);
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        changePage={this.changePage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        isFetchingValue={this.props.isFetchingValue}
      />
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
  };
};


export default connect(
  mapStateToProps, {follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, isFatchingFunc,
})(UsersContainer);
