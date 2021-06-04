import React from 'react';
import './DetailsCard.css';
import maleClubImg from '../../img/male.png';
import femaleClubImg from '../../img/female.png'
import foundIcon from '../../img/icon/found.png';
import flagIcon from '../../img/icon/flag.png';
import footballIcon from '../../img/icon/football.png'
import maleGenderIcon from '../../img/icon/male-gender-sign.png'

const DetailsCard = ({ club }) => {

    const { strTeam, strAlternate, intFormedYear, strCountry, strGender } = club;
    const clubGender = strGender ? strGender.toLowerCase() : strGender;

    const cardStyle = { background: `${clubGender === 'female' && '#FC4D57'}` } // different background for female club

    return (
        <div className="details-card" style={cardStyle}>
            <div>
                <h1 className="club-name">{strAlternate || strTeam}</h1>
                <p><img src={foundIcon} alt="" /> Founded: {intFormedYear}</p>
                <p><img src={flagIcon} alt="" /> Country: {strCountry}</p>
                <p><img src={footballIcon} alt="" /> Sports Type: Football</p>
                <p><img src={maleGenderIcon} alt="" /> Gender: {strGender}</p>
            </div>
            <div className="teamImg">
                {
                    clubGender === 'male'
                        ? // if club gender male then show male team photo
                        <img src={maleClubImg} alt="" />
                        : // else show female team photo
                        <img src={femaleClubImg} alt="" />
                }
            </div>
        </div>
    );
};

export default DetailsCard;