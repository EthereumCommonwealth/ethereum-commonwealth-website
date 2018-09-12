import React from 'react';
import PropTypes from 'prop-types';
import './TeamMemberCard.css';

export function TeamMemberCard({title, text, image, socialNetworks, position}) {


    return (
        <div className="col-md-6 col-lg-4 card text-center teamCard">
            <div className="card-body">

                <div className={'d-flex justify-content-center'}>

                <div className={'avatar-image rounded-circle'} style={{

                    backgroundImage: `url(${image})`
                }}>
                </div>
                </div>

                <h5 className="card-title py-3">{title}</h5>
                <h6 className={'py-3'}>{position}</h6>
                <p className="card-text">{text}</p>
                <p>
                    {socialNetworks.map((network, index) => {
                        return <a
                            key={network.url + network.prefix + index}
                            className="btn btn-social"
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            href={network.url}
                        >
                            <i className={network.prefix}>
                            </i>
                        </a>;
                    })}
                </p>
            </div>
        </div>
    );
}


TeamMemberCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    href: PropTypes.string,
    position: PropTypes.string.isRequired,
    socialNetworks: PropTypes.array,
    image: PropTypes.node.isRequired,
};

TeamMemberCard.defaultProps = {};
