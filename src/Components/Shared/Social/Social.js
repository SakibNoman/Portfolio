import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Social.css';

const Social = () => {
    return (
        <div>
            <SocialIcon className="mr-2 social-icon" target="_blank" style={{ height: 40, width: 40 }} url="https://github.com/SakibNoman" />
            <SocialIcon className="mr-2 social-icon" target="_blank" style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/nomansakib/" />
            <SocialIcon className="mr-2 social-icon" target="_blank" style={{ height: 40, width: 40 }} url="https://nomansakib.medium.com/" />
            <SocialIcon className="mr-2 social-icon" target="_blank" style={{ height: 40, width: 40 }} url="mailto:sakibnmn@gmail.com" />
        </div>
    );
};

export default Social;