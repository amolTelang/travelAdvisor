import axios from 'axios';

const URL='https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'



export const getPlacesData = async (sw,ne)=>{
    try {
        const {data:{data}}=await axios.get(URL,  {params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          'x-rapidapi-key': 'aa767eb622msh9a8645bf78454e1p1c1722jsn04c77a73efa8',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }},)
         
        
        return data;
    } catch (error) {
        console.log(error);
    }
}