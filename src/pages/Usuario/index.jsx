// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './usuario.css';

const Usuario = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data))  
    };

  return (
    <div className="app-container">
      <div className="form-group">
        <label>Nome</label>
        <input type="text" placeholder="Seu Nome"  {...register ("nome")} /> 
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input type="email" placeholder="Seu Email"  {...register ("email")} /> 
      </div>

      <div className="form-group">
        <label>Senha</label>
        <input type="password" placeholder="Sua Senha"  {...register ("senha")} /> 
      </div>

      <div className="form-group">
            
            <button onClick={() =>handleSubmit(onSubmit)()}>Criar Conta</button>
      </div>

    </div>
  )

}

export default Usuario;