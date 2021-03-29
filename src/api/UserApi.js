import axiosClient from "./axiosClient"

const UserApi = {
    getAll: () => {
        const url = '/users'
        return axiosClient.get(url);
    },
    add: (users) => {
        const url = `/users`;
        return axiosClient.post(url);
    }
}

export default UserApi