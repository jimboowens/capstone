// // an action is a js function that returns an object
// // that object must have at least a property of type
// import axios from 'axios';

// const config = {
//     headers: {
//         'content-type': 'multipart/form-data',
//         boundary:"3mb",
//     }
// };

// export default (formData)=>{
//     console.log('postAction is running',formData)
//     const axiosPromise = axios.post(`${window.apiHost}/items/postItem`,formData.pictureList,config)
//     return{
//         type:'POST_ACTION',
//         payload:axiosPromise,
//     }
// }

// an action is a js function that returns an object
// that object must have at least a property of type
import axios from 'axios';

const config = {
    headers: {
        'content-type': 'multipart/form-data',
    }
};

export default (formData)=>{
    const completedFormData = new FormData();
    completedFormData.append('description',formData.description);
    completedFormData.append('name',formData.name);
    completedFormData.append('price',formData.price);
    completedFormData.append('type',formData.type);
    for(let file of formData.pictureList){
        completedFormData.append('files', file);
    }
    console.log('postAction is running',completedFormData)
    const axiosPromise = axios.post(`${window.apiHost}/items/postItem`,completedFormData,config)
    return{
        type:'POST_ACTION',
        payload:axiosPromise,
    }
}