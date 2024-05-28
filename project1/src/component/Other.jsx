import { Link ,useSearchParams,useNavigate ,useLocation} from "react-router-dom";
import "./css/Other.css"
let Other=()=>{
    let [seachparems,setseachparems]=useSearchParams();
    let age=seachparems.get('age');
    let Name=seachparems.get('Name')
    let navigate=useNavigate();

    const location=useLocation();
    console.log(location)
    let navigates=(url)=>{
        navigate(url)
    }
    return(<>
    <div className="other">
        <h1>UseSearchParams In Url Data Get And Set</h1>
        <h1>Age is  : {age}</h1>
   <h1>Name is : {Name}</h1>
   
   <input type='text' onChange={(e)=>setseachparems({Name:e.target.value,age:50})} placeholder="set city name in quari params"/><br /><br />
   <button onClick={()=>navigates('/contact')}> Go to contact page</button></div>

   </>
    );
}
export default Other;