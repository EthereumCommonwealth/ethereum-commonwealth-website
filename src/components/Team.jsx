

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import team from '../team';
import { TeamMemberCard } from './TeamMemberCard';

import dexaran_avatar from '../image/avatars/dexaran_avatar.png';
import yohan_avatar from '../image/avatars/yohan_avatar.jpg';
import jchimienti_avatar from '../image/avatars/jchimienti_avatar.jpg';
import union from '../image/Union.svg';

const avatars = {
  dexaran_avatar,
  yohan_avatar,
  jchimienti_avatar,
};


function mapToAvatar(avatarStr) {
  const avatar = avatarStr
    .split('/')
    .pop();

  return avatars[avatar];
}

function Team({ team, intl }) {
  return (
    <section id="team" className={'container'}>
        <h2 className={'pl-5'}>
            {intl.formatMessage({ id: 'team' })}
            <img src={union} width={'15px'} height={'15px'}/>
            </h2>
        <hr className="bg-secondary" />
        <div className="row d-flex justify-content-center my-3">
          {team.map((member, index) => (
            <TeamMemberCard
              key={member.name + index}
              title={member.name}
              position={member.position}
              text={member.bio}
              image={mapToAvatar(member.avatar)}
              socialNetworks={member.socialNetworks}
            />
          ))}
        </div>
    </section>
  );
}

Team.propTypes = {};
Team.defaultProps = {
  team,
};

export default injectIntl(Team);
