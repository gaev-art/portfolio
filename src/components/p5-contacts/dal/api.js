import axios from 'axios';

export const instance = axios.create({
    baseURL: `https://3010/`
})



export const sendContacts = {
    sendMessage() {
        return instance.post(`sendMessage`)
            .then(res => res.data)
    },
}