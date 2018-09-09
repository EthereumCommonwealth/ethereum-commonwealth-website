import React from 'react';

import './TeamMemberCard.css';

export function TeamMemberCard({title, text, href, image, socialNetworks, position}) {
    return (
        <div className="card text-center">


            <div className="card-body">

                <img
                    className={'card-img-top'}
                    src={image}
                    style={{maxWidth: '200px', height: 'auto'}}
                    alt=""/>

                <h5 className="card-title">{title}</h5>
                <h6>{position}</h6>
                <p className="card-text">{text}</p>
                <p>
                    {socialNetworks.map((network, index) => {
                        return <a
                            key={network.url + network.prefix + index}
                            className="btn"
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


