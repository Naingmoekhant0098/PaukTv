import api from "../api/axios";
export default {
    fetchMatches : async(params : any)=>{
      try {
        const response = await api.get(`/matches`,{params});
        return response.data
      } catch (error) {
        console.log(error)

      }
    }
}