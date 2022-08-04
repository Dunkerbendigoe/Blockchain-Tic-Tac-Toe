var tictactoe = artifacts.require("./tictactoe.sol")

const address2 = '';

module.exports = function(deployer) { 
    deployer.deploy(Ratings, address2, {gas: 6700000});
}
