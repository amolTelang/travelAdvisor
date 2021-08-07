import axios from 'axios';

const URL='https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'
var options = {
    
    params: {
      bl_latitude: '11.847676',
      bl_longitude: '108.473209',
      tr_longitude: '109.149359',
      tr_latitude: '12.838442',
      
    },
    headers: {
      'x-rapidapi-key': 'aa767eb622msh9a8645bf78454e1p1c1722jsn04c77a73efa8',
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
    }
  };
  

export const getPlacesData = async ()=>{
    try {
        const {data:{data}}=await axios.get(URL,options);
        return data;
    } catch (error) {
        
    }
}