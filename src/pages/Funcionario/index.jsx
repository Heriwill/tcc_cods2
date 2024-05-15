// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './funcionario.css';

const Funcionario = () => {
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
      <br />
      <div className="form-group">
        <label>CPF</label>
        <input type="text" placeholder="___.___.____-" maxLength={11} {...register ("cpf")} /> 
      </div>
        <br />
      <div className="form-group">
        <label>E-mail</label>
        <input type="email" placeholder="Seu Email"  {...register ("email")} /> 
      </div>
        <br />
      <div className="form-group">
        <label>Telefone</label>
        <input type="text" placeholder="Seu telefone"  {...register ("telefone")} /> 
      </div>
        <br />
        
      <div className="form-group">
            
            <button onClick={() =>handleSubmit(onSubmit)()}>Cadastrar</button>
      </div>

    </div>
  )

}

export default Funcionario;