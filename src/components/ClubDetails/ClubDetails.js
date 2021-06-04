import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './ClubDetails.css'
import Spinner from '../Spinner/Spinner';
import DetailsCard from '../DetailsCard/DetailsCard';
import SocialLinks from '../SocialLinks/SocialLinks';


const ClubDetails = () => {
    const { clubId } = useParams();

    const [club, setClub] = useState({});
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`)
            .then(res => res.json())
            .then(data => setClub(data.teams[0]))
            .catch(err => setError(err))
    }, [clubId]);


    const { strDescriptionEN, strTeamBadge, strStadiumThumb } = club;

    console.log(error);
    return (
        <div>
            <Header badge={strTeamBadge} stadium={strStadiumThumb} />
            <div className="container">
                {
                    Object.keys(club).length // if Data loaded then show data
                        ?
                        <div>
                            <DetailsCard club={club} />

                            <div className="description">
                                <p>{strDescriptionEN}</p>
                            </div>

                            <SocialLinks club={club} />
                        </div>
                        : // else
                        <div className="status-area">
                            {
                                error
                                    ? // if error occurred then show error msg
                                    <p className="error-msg">Something went wrong! Please try again later.</p>
                                    : // else loading spinner
                                    <Spinner />
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default ClubDetails;