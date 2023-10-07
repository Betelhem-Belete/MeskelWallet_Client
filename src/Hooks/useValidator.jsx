import { UseAuthContext } from "./useAuthContext";
import {useState, useEffect} from 'react'

 export const useValidator = ()=>{

const {user, dispatch} = UseAuthContext()
const [valid ,setValid] = useState(false)

    // const Verifiy = ()=>{
useEffect(()=>{
    if(!user){
      setValid(false)
      dispatch({type: 'LOGOUT'})
      return
    }
      const tok = user.token  
    fetch("https://gebeyachn-server-apiendpoint.onrender.com/api/user/verify", {
      method: "POST",
      headers: { authorization: `beared ${tok}` },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const states = data.user;
        setValid(states);
        if (!states) {
          dispatch({ type: "LOGOUT" });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },[ dispatch,user])

  return {valid}
}