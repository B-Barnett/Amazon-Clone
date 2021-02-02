import React from 'react';
import '../style/SignInTab.css';

const SignInTab = props => {

    return(
        <div className="sign_in_tab">
            <div className="sign_in_tab_content">
                <h2>Sign in for the best experience</h2>
                <button className="sign_in_button">Sign in securely</button>
            </div>
        </div>
    );
}

export default SignInTab;