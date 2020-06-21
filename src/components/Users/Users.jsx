import React from "react";
import styles from "./users.module.css";
import Preloader from "../common/preloader/preloader";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  const pagesArray = [];
  const quantityPages = Math.ceil(props.totalUsersCount / props.pageSize);
  for (let x = 1; x < quantityPages; x++) {
    pagesArray.push(x);
  }
  return (
    <div>
      {props.isFetchingValue && <Preloader />}
      <div>
        {pagesArray.map((p) => {
          return (
            <span
              className={
                props.currentPage === p ? styles.selectPage : styles.page
              }
              onClick={() => {
                props.changePage(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img alt='userPhoto'
                  src={
                    u.photos.small
                      ? u.photos.small
                      : "https://i.pinimg.com/originals/45/bc/2e/45bc2e15216ccebb108abcb7757e6aed.jpg"
                  }
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button disabled = {props.followingInProgress.some(id=>id===u.id)}
                  onClick={() => {
                    props.unfollow(u.id)
                  }}
                >
                  unFollow
                </button>
              ) : (
                <button disabled = {props.followingInProgress.some(id=>id===u.id)}
                  onClick={() => {      
                    props.follow(u.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
