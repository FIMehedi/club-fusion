import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SocialLinks.css'

const SocialLinks = ({ club }) => {

    const socialMedia = {
        strFacebook: faFacebook,
        strTwitter: faTwitter,
        strInstagram: faInstagram,
        strYoutube: faYoutube,
        strWebsite: faGlobe
    } // property name case sensitive

    return (
        <div className="social-area">
            {
                Object.keys(socialMedia).map(media => {
                    const socialLink = club[media];
                    if (socialLink) {
                        return <a key={media} href={`http://${socialLink}`} rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={socialMedia[media]} className="social-link" />
                        </a>
                    }
                    else {
                        return '';
                    }
                })
            }
        </div>
    );
};

export default SocialLinks;