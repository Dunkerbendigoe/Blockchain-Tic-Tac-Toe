import Web3 from 'web3/dist/web3.min.js';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

let account0 = "0x4eC7468bF16c9a9F0b3Fca4b86Fc1f26974F68Ee"
let account1 = "0x891Bf0Cc2e193de0C43292812b2e455492d11673"

let TicTacToeABI = [{"inputs":[{"internalType":"address payable","name":"p2","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_turnNumber","type":"uint256"}],"name":"myTurn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"kill","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"}],"name":"validMove","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"displayBoard","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"winCheck","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"}],"name":"play","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"winner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address payable","name":"p2","type":"address"}],"name":"newGame","outputs":[],"stateMutability":"nonpayable","type":"function"}]

let TicTacToeAddress = '0xada13777c49ddB653712497393F3Ff96576951b4'


//initialize the rating contract with web3
//referece https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html

const TicTacToeContract = new web3.eth.Contract(TicTacToeABI, TicTacToeAddress);

export {TicTacToeContract, account0, web3, TicTacToeABI, account1}

