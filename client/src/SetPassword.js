// import React from 'react';
// import {Link,useHistory,useParams} from 'react-router-dom';





// const SetPassword = () => {
//     const history = useHistory()
//     const [password , setPassword] = useState("");
//     const {token} = useParams();
//     console.log(token);

//     const PostData = () => {
//         fetch("/",{
//             method:"post",
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body: JSON.stringify({
//                 password,
//             })
//         }).then(res=>res.json())
//         .then(data=>{console.log(data)
//         if(data.error){
//             console.log(error);
//         }
//         else{
//             history.push('/Registerform')
//         }
//         }).catch(err=>{
//             console.log(err);
//         })
//     }


//     return(
//         <div className="myCard">
//             <div className="card">
//                 <h2> Reset Password </h2>
//                 <input
//                 type="password"
//                 placeholder="enter a new Password !"
//                 value={password}
//                 onChange={(e)=> setPassword(e.target.value)}
//                 />
//                 <button
//                 className="btn"
//                 onClick={()=> PostData()}
//                 >
//                     Save Password
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default SetPassword;