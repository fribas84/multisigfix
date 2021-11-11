const Wallet = artifacts.require("Wallet");

module.exports = function (deployer,network, accounts) {
  const accountsArray = [accounts[0], accounts[1], accounts[2]]
  deployer.deploy(Wallet, accountsArray, 2);
};
