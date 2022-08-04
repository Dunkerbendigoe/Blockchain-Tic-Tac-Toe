var ticTacToe = artifacts.require('./tictactoe.sol');

const account2 = '';

module.exports = function(deployer, network, accounts) {
    deployer.deploy(ticTacToe, account2, {gasLimit : 500000})
}
