import React from 'react';

const Nav = props => {
    return(
        <nav className="bg-dark text-light p-2">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Click Game</h3>
                    </div>
                    <div className="col">
                        Current Score: {props.score}    |                        
                        High Score: {props.highScore}  
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;