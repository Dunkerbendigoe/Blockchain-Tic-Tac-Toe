import Web3 from 'web3/dist/web3.min.js';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));


let account0 = "0x006bcdfA8C5D48BDfFA2dDaDE05648269B4DC015"

let ratingABI = [{"inputs":[],"name":"kill","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"}],"name":"validMove","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"displayBoard","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"winCheck","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"}],"name":"play","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"p2","type":"address"}],"name":"TicTacToe","outputs":[],"stateMutability":"nonpayable","type":"function"}]

let ratingAddress = '0x87BBF1F0C8a65B39700c81d9Bf21ca7E80E1F9Bf'


//initialize the rating contract with web3
//referece https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html

const ratingContract = new web3.eth.Contract(ratingABI, ratingAddress);

export {ratingContract, account0}