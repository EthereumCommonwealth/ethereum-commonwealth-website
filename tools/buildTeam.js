const fs = require('fs');
function mapToTeam(member) {

    const {key, props: {avatar, name, position, socialNetworks, bio}} = member;

    return Object.assign({}, {
        avatar,
        name,
        position,
        socialNetworks,
        bio
    })
}




const team = [
    {
        "key": "Dexaran",
        "ref": null,
        "props": {
            "avatar": "/image/avatars/dexaran_avatar.png",
            "name": "Dexaran",
            "position": "CEO, Security Engineer",
            "socialNetworks": [
                {
                    "prefix": "fab fa-github",
                    "url": "https://github.com/Dexaran"
                },
                {
                    "prefix": "far fa-envelope",
                    "url": "mailto:dexaran820@gmail.com"
                }
            ],
            "bio": "My main specialty is information security. I’ve been an Ethereum smart-contracts developer since its first days. I created the ERC223 token standard and founded DEX ICO and the Ethereum Commonwealth. I was formerly a security auditor."
        },
        "_owner": null
    },
    {
        "key": "Yohan Graterol",
        "ref": null,
        "props": {
            "avatar": "/image/avatars/yohan_avatar.jpg",
            "name": "Yohan Graterol",
            "position": "CTO & Main Callisto Developer",
            "socialNetworks": [
                {
                    "prefix": "fab fa-github",
                    "url": "https://t.me/yograterol"
                },
                {
                    "prefix": "far fa-envelope",
                    "url": "mailto:yograterol@callisto.network"
                },
                {
                    "prefix": "fab fa-twitter",
                    "url": "https://twitter.com/yograterol/"
                },
                {
                    "prefix": "fab fa-telegram-plane",
                    "url": "https://t.me/yograterol"
                },
                {
                    "prefix": "fab fa-linkedin-in",
                    "url": "https://www.linkedin.com/in/yograterol/"
                },
                {
                    "prefix": "fab fa-bitcoin",
                    "url": "https://bitcointalk.org/index.php?action=profile;u=1147564"
                }
            ],
            "bio": "Hi, I’m a backend developer (Python and Go) with over seven years of experience. I have worked for as a Head of Product for three years. The cryptocurrency world is my passion."
        },
        "_owner": null
    },
    {
        "key": "Carlos Sampol",
        "ref": null,
        "props": {
            "avatar": "/image/avatars/sampol_avatar.jpg",
            "name": "Carlos Sampol",
            "position": "Head of Web Development",
            "socialNetworks": [
                {
                    "prefix": "fab fa-github",
                    "url": "https://github.com/sampol18/"
                },
                {
                    "prefix": "far fa-envelope",
                    "url": "mailto:s@protonmail.com"
                },
                {
                    "prefix": "fab fa-twitter",
                    "url": "https://twitter.com/sampol18/"
                },
                {
                    "prefix": "fab fa-telegram-plane",
                    "url": "https://t.me/sampol18"
                },
                {
                    "prefix": "fab fa-linkedin-in",
                    "url": "https://www.linkedin.com/in/carlossampol/"
                }
            ],
            "bio": "Skilled in the Frontend development Environment with knowledge in HTML5/CSS3, Javascript (React JS) and Backend Environments with Node.js. Worked in several important startups such as Platzi or GoRead"
        },
        "_owner": null
    },
    {
        "key": "Nick Sawinyh",
        "ref": null,
        "props": {
            "avatar": "/image/avatars/nsawinyh_avatar.jpg",
            "name": "Nick Sawinyh",
            "position": "Head of Marketing",
            "socialNetworks": [
                {
                    "prefix": "fab fa-github",
                    "url": "https://github.com/sneg55"
                },
                {
                    "prefix": "far fa-envelope",
                    "url": "mailto:nsawinyh@callisto.network"
                },
                {
                    "prefix": "fab fa-twitter",
                    "url": "https://twitter.com/sawinyh/"
                },
                {
                    "prefix": "fab fa-linkedin-in",
                    "url": "https://www.linkedin.com/in/sawinyh/"
                }
            ],
            "bio": "I have over 12 years of experience working in digital marketing and product management. My specialties include product development, brand awareness, and omnichannel marketing campaigns."
        },
        "_owner": null
    },
    {
        "key": "Darwin Ongko",
        "ref": null,
        "props": {
            "avatar": "/image/avatars/darwino_avatar.jpg",
            "name": "Darwin Ongko",
            "position": "Callisto Community Manager & Callisto Indonesia Ambassador",
            "socialNetworks": [
                {
                    "prefix": "far fa-envelope",
                    "url": "mailto:darwino@callisto.network"
                },
                {
                    "prefix": "fab fa-telegram-plane",
                    "url": "https://t.me/Darwino"
                },
                {
                    "prefix": "fab fa-instagram",
                    "url": "https://www.instagram.com/darwinongko/"
                }
            ],
            "bio": "I have over 8 years of experience working at a life insurance company as an agency manager for Prudential Life Assurance and 7 years at Generali Indonesia as an Agency Business Director, managing more than 4,000 people from 10 cities in Indonesia within the agency."
        },
        "_owner": null
    },
    {
        "key": "Dardan Latifi",
        "ref": null,
        "props": {
            "avatar": "/image/avatars/dardan_avatar.jpg",
            "name": "Dardan Latifi",
            "position": "Head of Social Media",
            "socialNetworks": [
                {
                    "prefix": "far fa-envelope",
                    "url": "mailto:dardan@callisto.network"
                },
                {
                    "prefix": "fab fa-twitter",
                    "url": "https://twitter.com/dardanlatifi"
                },
                {
                    "prefix": "fab fa-linkedin-in",
                    "url": "https://www.linkedin.com/in/dardanlatifi"
                }
            ],
            "bio": "Extensive experience in engineering & management, specialized in storage and SAN networks. More than 10 years’ experience in information technology, with hands-on experience in research, design, and implementation of new technologies and system integration."
        },
        "_owner": null
    },
    {
        "key": "Methw - Nug",
        "ref": null,
        "props": {
            "avatar": "/image/avatars/methw_avatar.jpeg",
            "name": "Methw - Nug",
            "position": "Documentation Writer",
            "socialNetworks": [
                {
                    "prefix": "far fa-envelope",
                    "url": "mailto:methw@callisto.network"
                },
                {
                    "prefix": "fab fa-telegram-plane",
                    "url": "https://t.me/methwZ"
                }
            ],
            "bio": "Strong information technology background with a Bachelor of Science (B.Sc.) in Computer Science and electronics. Diverse IT experience with a demonstrated history in network administration, cloud computing, blockchain technology and cryptocurrency."
        },
        "_owner": null
    },
    {
        "key": "Tio Toi",
        "ref": null,
        "props": {
            "avatar": "/image/avatars/tio_avatar.jpeg",
            "name": "Tio Toi",
            "position": "Head of Community",
            "socialNetworks": [
                {
                    "prefix": "far fa-envelope",
                    "url": "mailto:programmer.django@gmail.com"
                },
                {
                    "prefix": "fab fa-telegram-plane",
                    "url": "https://t.me/tiotoi"
                },
                {
                    "prefix": "fab fa-linkedin-in",
                    "url": "https://www.linkedin.com/in/tio-toi-192279165/"
                }
            ],
            "bio": "Motivated, worked as an IT project manager for over 13 years. Owner of ProffeeCa since May, 2016. Enthusiastic and loves to learn new things."
        },
        "_owner": null
    },
    {
        "key": "Yuriy Kharytoshyn",
        "ref": null,
        "props": {
            "avatar": "/image/avatars/yuriy_avatar.jpg",
            "name": "Yuriy Kharytoshyn",
            "position": "Security Auditing Manager",
            "socialNetworks": [
                {
                    "prefix": "fab fa-github",
                    "url": "https://github.com/yuriy77k"
                },
                {
                    "prefix": "fab fa-telegram-plane",
                    "url": "https://t.me/yuriy77k"
                },
                {
                    "prefix": "far fa-envelope",
                    "url": "mailto:yuri@callisto.network"
                }
            ],
            "bio": "I’m Information Security expert with over 18 years experience. Backend Developer (C/C++, Python, PHP, Assembler) of InfoSec related projects. Since 2016, focused on Blockchain technologies and Smart contract security. A Master of Science (M.Sc.) in Computer Science and Мathematic."
        },
        "_owner": null
    },
    {
        "key": "Gleb Shirshov",
        "ref": null,
        "props": {
            "avatar": "/image/avatars/shirshov.jpg",
            "name": "Gleb Shirshov",
            "position": "Advisor",
            "socialNetworks": [
                {
                    "prefix": "fab fa-linkedin-in",
                    "url": "https://www.linkedin.com/in/gleb-shirshov-77220822/"
                },
                {
                    "prefix": "fab fa-instagram",
                    "url": "https://www.instagram.com/gleb.shirshov/"
                },
                {
                    "prefix": "fab fa-github",
                    "url": "https://github.com/belgracing"
                }
            ],
            "bio": "I have more than 15 years of sales experience combined with an IT background. I’m working on business development as well as all kinds of external communication with the project partners."
        },
        "_owner": null
    },
    {
        "key": "Mikhail Korolev",
        "ref": null,
        "props": {
            "avatar": "/image/avatars/mikhail_korolev_1.jpg",
            "name": "Mikhail Korolev",
            "position": "Advisor",
            "socialNetworks": [
                {
                    "prefix": "fab fa-linkedin-in",
                    "url": "https://www.linkedin.com/in/dudlik/"
                },
                {
                    "prefix": "fab fa-instagram",
                    "url": "https://www.instagram.com/dudlik_spb/"
                },
                {
                    "prefix": "fab fa-github",
                    "url": "https://github.com/DuDlikSPB"
                }
            ],
            "bio": "Proud father, husband, and drone-racer. I've been working in IT Industry for more than ten years. I love finding new technology trends and I always try to work on the most promising ones. Cryptocurrencies are in the first stage of the World expansion and we will see a huge leap in their development very soon."
        },
        "_owner": null
    }
]

const _team = team.map(mapToTeam);

fs.writeFile('./team.json', JSON.stringify(_team, null, 4), () => {

})

