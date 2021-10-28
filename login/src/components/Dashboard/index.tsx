import { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { AuthContext } from "../../providers/Auth"
import { Container } from "./style"

const Dashboard = () =>{
    const history = useHistory()
    const { authToken, Logout } = useContext(AuthContext)
    
    useEffect(()=>{
        if(authToken.length === 0){
            history.push('/')
        }
    }, [authToken])
    console.log(authToken.length)
    return(
        <Container>
            <p>Dashboard</p>
            <button onClick={Logout}>Deslogar</button>
        </Container>
    )
}

export default Dashboard