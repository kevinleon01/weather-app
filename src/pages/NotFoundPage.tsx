import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFound from '../assets/pageNotFound.jpeg';

class NotFoundPage extends React.Component {

    render() {
        return <div>
            <img src={pageNotFound} alt="" />
            <p style={{ textAlign: "center" }}>
                <Link to="/">Go to Home </Link>
            </p>
        </div>;
    }
}

export default NotFoundPage;