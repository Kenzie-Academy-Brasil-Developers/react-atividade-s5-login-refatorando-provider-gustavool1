import { Container, Form } from "./style"
import { useForm } from "react-hook-form"
import axios from "axios"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from "react-router"
import { useContext } from "react"
import { AuthContext } from "../../providers/Auth"
import 'react-toastify/dist/ReactToastify.css';

interface LoginData{
    email:string,
    password:string
}
const Login = () =>{
    const { LogIn } = useContext(AuthContext)
    const history = useHistory()
    const scheme = yup.object().shape({
        email: yup.string().required("Email obrigatório").email('Insira um email válido'),
        password:yup.string().required("Senha obrigatória")
    })
    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
        resolver: yupResolver(scheme)
    })
 
    const onSubmit = (data:LoginData) =>{
        axios.post("https://kenziehub.herokuapp.com/sessions", data)
        .then((response)=>{
            LogIn()
            history.push('/dashboard')
        })        
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h2>Logar</h2>
                <label>{errors.email?.message}</label>
                <input placeholder='Email' {...register("email")}/>
                <label>{errors.password?.message}</label>
                <input placeholder='Senha'  type='password'{...register("password")}/>
                <button type='submit'>Entrar</button>
            </Form>
        </Container>
    )
}

export default Login