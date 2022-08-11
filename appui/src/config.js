import Web3 from 'web3/dist/web3.min.js';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

let account0 = "0x86264e67A033eB7307821bCB7A1C6A3Fb649a6d3"
let account1 = "0x6676fEaA1B77780Dd56E0149bCDFB5d4EE9Db1fd"

let TicTacToeABI = [{"inputs":[{"internalType":"address payable","name":"p2","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_turnNumber","type":"uint256"}],"name":"myTurn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"kill","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"}],"name":"validMove","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"displayBoard","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"winCheck","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"}],"name":"play","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"winner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address payable","name":"p2","type":"address"}],"name":"newGame","outputs":[],"stateMutability":"nonpayable","type":"function"}]

let TicTacToeAddress = '0xb34a39C6C5CB361D9ab50fa866c47C4Fce79Fa48'


//initialize the rating contract with web3
//referece https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html

const TicTacToeContract = new web3.eth.Contract(TicTacToeABI, TicTacToeAddress);

export {TicTacToeContract, account0, web3, TicTacToeABI, account1}

