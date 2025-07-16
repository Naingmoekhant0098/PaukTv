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
    fetchNewsById :async(id : any)=>{
      try {
        const response = await api.get(`/news/${id}`);
        return response.data
      } catch (error) {
        console.log(error)

      }
     
    },
    fetchNews : async(params : any)=>{
      try {
        const response = await api.get(`/news`,{params});
        return response.data
      } catch (error) {
        console.log(error)

      }
     
    },
    fetchAds : async(params : any)=>{
      try {
        const response = await api.get(`/ads/type/popup/web`,{params});
        return response.data
      } catch (error) {
        console.log(error)

      }
     
    },
    fetchAdsBanner : async(params : any)=>{
      try {
        const response = await api.get(`/ads/type/banner/web`,{params});
        return response.data
      } catch (error) {
        console.log(error)

      }
     
    },
    fetchAdsBannerMedium : async(params : any)=>{
      try {
        const response = await api.get(`/ads/type/medium/web`,{params});
        return response.data
      } catch (error) {
        console.log(error)

      }
     
    },
    fetchChannel : async(params : any)=>{
      try {
        const response = await api.get(`/channel-category-posts/all`,{params});
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