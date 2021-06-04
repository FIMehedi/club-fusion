import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import Spinner from '../Spinner/Spinner';
import './Clubs.css'

const Clubs = () => {

    const [clubs, setClubs] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
            .then(res => res.json())
            .then(data => setClubs(data.teams))
            .catch(err => setError(err))
    }, []);


    return (
        <div className="container">
            <div className="clubs">
                {
                    clubs.length
                        ? // if Data loaded then show data
                        clubs.map(club => <Club key={club.idTeam} club={club}></Club>)
                        : // else
                        <div className="status-area">
                            {
                                error
                                    ? // if occurred then show error msg
                                    <p className="error-msg">Something went wrong! Please try again later.</p>
                                    : // else loading spinner
                                    <Spinner />
                            }
                        </div>
                }
            </div>
        </div >
    );
};

export default Clubs;