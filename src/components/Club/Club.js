import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Club.css'

const Club = ({ club }) => {

    const { strTeamBadge, strTeam, idTeam } = club
    const history = useHistory();

    const handleDetails = idTeam => {
        history.push(`/club/${idTeam}`);
    }

    return (
        <div className="club">
            <div className="club-logo">
                <img src={strTeamBadge} alt="" />
            </div>
            <h3 className="club-name">{strTeam}</h3>
            <p className="club-type">Sports Type: Football</p>
            <button onClick={() => handleDetails(idTeam)} className="btn">Explore <FontAwesomeIcon className="btn-icon" icon={faArrowRight} /> </button>
        </div>
    );
};

export default Club;