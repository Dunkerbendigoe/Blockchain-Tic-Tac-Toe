import Web3 from 'web3/dist/web3.min.js';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));


let account0 = "0x006bcdfA8C5D48BDfFA2dDaDE05648269B4DC015"

let ratingABI = [{"inputs":[{"internalType":"string[]","name":"_moviesList","type":"string[]"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"moviesList","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"string","name":"movieName","type":"string"}],"name":"addNewMovie","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"movieName","type":"string"}],"name":"totalVotesFor","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"string","name":"movieName","type":"string"}],"name":"voteForMovie","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getMoviesList","outputs":[{"internalType":"string[]","name":"_moviesList","type":"string[]"}],"stateMutability":"view","type":"function","constant":true}]

let ratingAddress = '0x87BBF1F0C8a65B39700c81d9Bf21ca7E80E1F9Bf'


//initialize the rating contract with web3
//referece https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html

const ratingContract = new web3.eth.Contract(ratingABI, ratingAddress);

export {ratingContract, account0}