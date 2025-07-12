import api from "../api/axios";
export default {
    fetchMatches : async(params : any)=>{
      try {
        const response = await api.get(`/matches`,{params});
        return response.data
      } catch (error) {
        console.log(error)

      }
    },
    fetchHighlights : async(params : any)=>{
      try {
        const response = await api.get(`/highlights`,{params});
        return response.data
      } catch (error) {
        console.log(error)

      }
     
    },
    fetchChannel : async(params : any)=>{
      try {
        const response = await api.get(`/channel-category`,{params});
        return response.data
      } catch (error) {
        console.log(error)

      }},
      fetchChannelbyUd : async(id : any)=>{
        
        try {
          const response = await api.get(`/channel-category-posts/${id}`);
          return response.data
        } catch (error) {
          console.log(error)
  
        }}
}