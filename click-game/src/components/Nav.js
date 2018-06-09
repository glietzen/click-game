import React from 'react';

const Nav = () => {
    return(
        <nav className="bg-dark text-light">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Click Game</h3>
                    </div>
                    <div className="col">
                        Current Score:                    
                        High Score:
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;