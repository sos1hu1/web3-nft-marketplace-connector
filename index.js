require('dotenv').config();
const Web3 = require('web3');

const web3 = new Web3(process.env.ETH_NODE_URL);

async function deployContract(abi, bytecode) {
    const contract = new web3.eth.Contract(abi);
    const accounts = await web3.eth.getAccounts();

    const result = await contract.deploy({
        data: bytecode
    })
    .send({
        from: accounts[0],
        gas: 1500000,
        gasPrice: '30000000000'
    });

    console.log(`Contract deployed to: ${result.options.address}`);
}

module.exports = { deployContract };