// an action is a js function that returns an object
// that object must have at least a property of type
import axios from 'axios';


export default (formData)=>{
    // console.log('postAction is running',formData)
    const axiosPromise = axios({
        url:`${window.apiHost}/items/postItem`,
        method: 'POST',
        data:formData,
        // headers:{
        //     'content-type':"multipart/form-data",
        // },
    })
    return{
        type:'POST_ACTION',
        payload:axiosPromise,
    }
}