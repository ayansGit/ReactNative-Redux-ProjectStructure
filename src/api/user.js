import APP_CONSTANTS from "../configs/constants";
import axios from "axios";
import { AsyncStorage } from "react-native"

export default userApi = {

    login: async(params) => {
        console.log(params)
        try {
            let response = await axios.post(
              `${APP_CONSTANTS.BASE_URL}user/signin`,
              params
            );
            let responseJson = await response.data;
            console.log(responseJson)
            return responseJson;
          } catch (error) {
            console.log("error",error)
            return error;
          }
    }
}