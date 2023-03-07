import axios from "axios";
import swal from '@sweetalert/with-react';

function Login() {
    
    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        console.log(emailRegex.test(email));

        console.log(email, password)
        if (email === '' || password === '') {
            swal(
                <h2>Los campos deben estar completos</h2>
            );
            return;
        }
        if(email !== '' && !emailRegex.test(email)) {
            swal(
                <h2>Debes escribir una direccion de correo valida</h2>
            );            return
        };
        if(email !== 'challenge@alkemy.org' || password !== 'react') {
            swal(
                <h2>Credenciales Invalidas</h2>
            );
            return
            };
        axios
        .post('http://challenge-react.alkemy.org', {email, password})
        .then(res => {swal(<h2>Ingresaste correctamente</h2>)
            const tokenRecibido = res.data.token;
            localStorage.setItem('token', tokenRecibido);
        })

    }
    return (
  <>
        <h2>Formulario Login</h2>
        <form onSubmit={submitHandler}>
            <label>
            <span>Email:</span>
            <br/>
            <input type="email" name="email" />
            </label>
            <br/>
            <label>
                <span>Contraseña:</span>
                <br/>
                <input type="password" name="password" />
            </label>
            <br/>
            <button type="submit">Ingresar</button>
        </form>
  </>
)
}
export default Login;
