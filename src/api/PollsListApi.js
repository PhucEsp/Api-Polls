import axiosClient from "./axiosClient"

const PollsListApi = {
    getAll: () => {
        const url = '/polls'
        return axiosClient.get(url);
    },
    dedete: (id) => {
        const url = `/polls/${id}`;
        return axiosClient.delete(url);
    }
}

export default PollsListApi