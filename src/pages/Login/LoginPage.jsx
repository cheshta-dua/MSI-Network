import Login from "../../components/Login/Login";
import Nav from "../../components/Navbar/Nav";
const LoginPage=()=>{
    return(
        <>
            <Nav dataChangefunc={()=>{}}/>
           
            <Login />
        </>
    )
}
export default LoginPage;