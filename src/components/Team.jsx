'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import team from "../team";
import {TeamMemberCard} from "./TeamMemberCard";
import {injectIntl} from 'react-intl';

import dexaran_avatar from '../image/avatars/dexaran_avatar.png';
import yohan_avatar from '../image/avatars/yohan_avatar.jpg';
import jchimienti_avatar from '../image/avatars/jchimienti_avatar.jpg';


const avatars = {
    dexaran_avatar,
    yohan_avatar,
    jchimienti_avatar
};


function mapToAvatar(avatarStr) {

    const avatar = avatarStr
        .split('/')
        .pop();

    return avatars[avatar];

}

function Team({team, intl}) {
    return (
        <section id={"team"} >
           <div className={'container py-3'}>
               <h2 className={'text-capitalize'}>{intl.formatMessage({id: 'team'})}</h2>
               <hr/>
               <div className={"card-group"}>
                   {team.map((member, index) => {

                       return <TeamMemberCard
                               key={member.name + index}
                               title={member.name}
                               position={member.position}
                               text={member.bio}
                               image={mapToAvatar(member.avatar)}
                               socialNetworks={member.socialNetworks}
                           />
                   })}
               </div>
           </div>
        </section>
    );
}

Team.propTypes = {};
Team.defaultProps = {
    team,
};

export default injectIntl(Team);
