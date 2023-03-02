import axios from "axios";

function Login() {
    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        console.log(emailRegex.test(email));

        console.log(email, password)
        if (email === '' || password === '') {
            console.log('los campos deben estar completos');
            return;
        }
        if(email !== '' && !emailRegex.test(email)) {
            console.log('debes escribir una direccion de correo electronico');
            return
        }
        if(email !== 'challenge@alkemy.org' || password !== 'react') {
            console.log('credenciales invalidas')
        }


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
