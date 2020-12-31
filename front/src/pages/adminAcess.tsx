import React from 'react';

import '../styles/global.css';

function adminAcess(){
    return (
        <div id="page-AdminAcess">
            <div className="content-wrapper">
                <header>
                    <h1>Admin Acess</h1>
                </header>
                <main>
                    <strong>
                        <p>login:</p>
                        <p>Senha:</p>
                    </strong>
                </main>
            </div>
        </div>
    );
};

export default adminAcess;