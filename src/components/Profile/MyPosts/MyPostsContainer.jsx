import MyPosts from "./MyPosts";
import {addNewPost, changeInput} from './../../../redux/profile-reducer';
import { connect } from "react-redux";


const mapStateToProps = (state)=>{
  return {
    posts: state.profilePage,
  };
};


const MyPostsContainer = connect(mapStateToProps, {addNewPost, changeInput})(MyPosts);


export default MyPostsContainer;
