/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=100";
// const APIKEY = "&apikey=trilogy";

export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  },
};
