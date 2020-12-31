import React from 'react';

import '../styles/global.css';
import '../styles/pages/adminAcess.css'

function adminAcess(){
    return (
        <div id="page-AdminAcess">
            <div className="content-wrapper">
                <header>
                    <div className="tolbarLogin">
                        <h1>Admin Acess</h1>
                    </div>             
                </header>
                <main>
                    <div className="content">
                        <div className="formGroup-Credentials">
                            <form action="" name="loginForm" id="login">
                                <input type="text" name="UserName" placeholder="Seu nome de usuário" />
                                <input type="text" name="Password" placeholder="Sua senha" />

                                <input type="submit" name="send" value="enviar" />
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default adminAcess;