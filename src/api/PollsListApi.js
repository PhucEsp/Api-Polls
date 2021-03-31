import axiosClient from "./axiosClient"

const PollsListApi = {
    getAll: () => {
        const url = '/polls'
        return axiosClient.get(url);
    },
    dedete: (id) => {
        const url = `/poll/${id}`;
        return axiosClient.delete(url);
    },
    update: (id, data) => {
        const url = `/poll/${id}`;
        return axiosClient.put(url,data);
    },
    add: (newpoll) => {
        const url = `/polls`;
        return axiosClient.post(url,newpoll);
    }
}

export default PollsListApi