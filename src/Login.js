import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false,
            error: ''
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // Aquí puedes agregar la lógica de autenticación simulada
        const { username, password } = this.state;
        if (username === 'Peter' && password === '2004') {
            this.setState({
                isLoggedIn: true,
                error: ''
            });
        } else {
            this.setState({
                isLoggedIn: false,
                error: 'Usuario o contraseña incorrectos'
            });
        }
        if (username === 'Mon' && password === '1000') {
            this.setState({
                isLoggedIn: true,
                error: ''
            });
        } else {
            this.setState({
                isLoggedIn: false,
                error: 'Usuario o contraseña incorrectos'
            });
        }

    }

    render() {
        if (this.state.isLoggedIn) {
            return <div>¡Has iniciado sesión correctamente!</div>;
        }

        return (
            <div class="for">
                    <h2 class="bien"> Bievenidos  </h2>  
                <h2>Iniciar Sesión</h2>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label class="us">Usuario:</label> <br></br>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label class="con">Contraseña:</label> <br></br>
                        <input
                        
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <br></br>
                    <button class="btn btn-primary mb-3"  id="but"type="submit">Iniciar Sesión</button>
                </form>
            </div>
        );
    }
}

export default Login;