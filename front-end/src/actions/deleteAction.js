import axios from 'axios';

export default (uid,gid)=>{
    // console.log('got to delete cart item action uid is:',uid,"and gid is: ",gid)
    const updateCartPromise = axios({
        method:'POST',
        url:`${window.apiHost}/cart/updateCart/deleteItem`,
        data:{
            uid,
            gid,
        }
    })
    return{
        type:`DELETE_ACTION`,
        payload:updateCartPromise,
    }
}