import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY":"429f939d-8fa1-438e-8274-239346207e7e"}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 50){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },
    unfollow (userId){
        return instance.delete(`follow/${userId}`)
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    getUserProfile(userId){
        return instance.get(`profile/` + userId)
    }
};

export const authAPI = {
    me(){
       return instance.get(`auth/me`)
    }
}

