const fs = require('fs');

const projects = [
    {
        "name": "ERC223",
        "description": "ERC223 is a superset of the ERC20 token standard.\nIt is a step forward towards economic abstration at the application/contract level allowing the use of tokens as first class value transfer assets in smart contract development.\nIt is also a more safe standard as it doesn\'t allow token transfers to contracts that don\'t support token receiving and handling",
        url: ""
    },
    {
        name: "ClassicMask",
        "description": "Improved MetaMask version. Supports more chains, testnets, and better custom gas. Will support messages and DexNS soon.",
        url: ""
    },
    {
        name: "Callisto",
        description: "The main goal of Callisto is to research and develop a reference implementation of a self-sustaining, self-goverened and self-funded blockchain ecosystem and development environment.",
        url: '',

    },
    {
        name: "0xinfra",
        "description": "Our easy to use API and developer tools provide secure, reliable, and scalable access to Ethereum Classic and Callisto blockchains. We provide infrastructure for your decentralized applications so you can focus on the features",
        url: "",

    },
    {
        name: "ClassicEtherWallet",
        "description": "ClassicEtherWallet is an open source, javascript, client-side tool for operating Ethereum Classic wallets",
        url: "https://ethereumproject.github.io/etherwallet/"
    }
];


const trans = projects.map(p => {
        return {
            [p.name + '.description']: p.description
        }
    }
);


fs.writeFile('./projects.json', JSON.stringify(trans, null, 4), () => {

})
