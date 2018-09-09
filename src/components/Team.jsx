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
        <div className={'container'}>
            <section id={"team"} className={'container py-3'}>
                <h2 className={'text-capitalize'}>{intl.formatMessage({id: 'team'})}</h2>
                <div className={"row justify-content-center align-items-center"}>
                    {team.map((member, index) => {

                        return <div className={'col-md-6 col-lg-4'} key={member.name + index}>
                            <TeamMemberCard
                                key={member.name + index}
                                title={member.name}
                                position={member.position}
                                text={member.bio}
                                href={null}
                                image={mapToAvatar(member.avatar)}
                                socialNetworks={member.socialNetworks}
                            />
                        </div>;
                    })}
                </div>
            </section>
        </div>
    );
}

Team.propTypes = {};
Team.defaultProps = {
    team,
};

export default injectIntl(Team);
