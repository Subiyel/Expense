import axios from "axios";

const useApi = async (url, param = null, type = "GET", token = null) => {
    
  try {

      let request = {
        method: type,
        url: url,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        }
      }
      if (type != "GET"){
        request.data = param
      }
      console.log( request )
      const response = await axios(request);
      console.log(response)
      return response.data;

    } catch (error) {
      console.log("Error: ",error);
    } 
  }


export default useApi;