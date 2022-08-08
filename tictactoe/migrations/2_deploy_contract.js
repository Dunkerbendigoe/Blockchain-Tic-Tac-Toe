var tictactoe = artifacts.require("./tictactoe.sol")

const address2 = '0x9971d75b3c527a44f9e5DbcD5B14e35df0488Dd7';

module.exports = function(deployer) { 
    deployer.deploy(tictactoe, address2, {gas: 6700000});
}
