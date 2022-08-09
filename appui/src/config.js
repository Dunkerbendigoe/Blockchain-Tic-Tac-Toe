import Web3 from 'web3/dist/web3.min.js';

const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/e21095eab1fe4133b349088c4ded036e"));

let account0 = {
    address : "0xC2e16D85f6Dc35559E5a0C7FB513926450F50026",
    privateKey : "bef0d6994f257823d7d9cf01d105926495ae811d1221b678c2a26169ee9df7f1"
}

let account1 = {
    address: "0x0d69b241138dAB2bAAe91714ae15BF1c2851688a",
    privateKey: "26fc0ecb6641638088521b8dba1fc6baefa3a02bf35727932b5ddc9db2a977b6"
}

let TicTacToeABI = [{"inputs":[{"internalType":"address payable","name":"p2","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_turnNumber","type":"uint256"}],"name":"myTurn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"kill","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"}],"name":"validMove","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"displayBoard","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"winCheck","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"}],"name":"play","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"winner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address payable","name":"p2","type":"address"}],"name":"newGame","outputs":[],"stateMutability":"nonpayable","type":"function"}]

let TicTacToeAddress = '0xB8500a208D9049B8990851Be4d1909C21fA757fC'


//initialize the rating contract with web3
//referece https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html

const TicTacToeContract = new web3.eth.Contract(TicTacToeABI, TicTacToeAddress);

export {TicTacToeContract, account0, account1, web3, TicTacToeABI}

