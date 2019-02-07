import axios from 'axios';

export const fetchEmployees = (callback) => {

    return function (dispatch) {

        axios.get(process.env.REACT_APP_API_BASEURL + '/employees')
            .then(res => {

                callback({
                    employees: res.data
                });
            })
    }

}