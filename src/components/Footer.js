import React from 'react';

export default class Footer extends React.Component {
    render() {
        return(
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong><a href="https://github.com/TechnicJelle/Project-Final-Approach">Catoms</a></strong> by <strong>The Atoms Family</strong>.
                        The source code is licensed <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
                        The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a> and available <a href="https://github.com/TechnicJelle/PFA-SPA">here</a>.
                    </p>
                </div>
            </footer>
        )
    }
}
