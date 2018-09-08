'use strict';

import team from "../team";
import {TeamMemberCard} from "./TeamMemberCard";
import {injectIntl} from 'react-intl';


var React = require('react');
var PropTypes = require('prop-types');

function Team({team, intl}) {
    return (
        <div className={'container'}>
            <section id={"team"}> className="container">
                <h3>{intl.formatMessage({id: 'team'})}</h3>
                <div className={"row"}>
                    {team.map((member, index) => {

                        return <div className={'col-xs-12 col-sm-6 col-lg-3'} key={member.name + index}>
                            <TeamMemberCard
                                key={member.name + index}
                                title={member.name}
                                position={member.position}
                                text={member.bio}
                                href={null}
                                image={member.avatar}
                                socialNetworks={member.socialNetworks}
                            />
                        </div>;
                    })}
                </div>
            </section>
        </div>
    );
}

Team.propTypes = {

};
Team.defaultProps = {
    team,
};

export default injectIntl(Team);
