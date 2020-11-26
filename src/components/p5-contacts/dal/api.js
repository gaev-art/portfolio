import axios from 'axios'


export const api = {
  sendMessage(name, contact, message) {
    return axios.post(`https://smtp-server-1-for-portfolio.herokuapp.com/sendMessage`, {name, contact, message})
  }
}