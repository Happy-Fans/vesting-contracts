const PrivateSaleVesting = artifacts.require('PrivateSaleVesting');
const { time } = require('@openzeppelin/test-helpers');
const tokenContract = require('../data/token-contract');
const tge = require('../data/tge');
const allocations = require('../data/allocations').privateSale;

module.exports = async function (deployer, network) {
  const start = tge.timestamp;
  const beneficiaries = allocations.map(e => e.address);
  const amounts = allocations.map(e => e.amount);

  await deployer.deploy(PrivateSaleVesting, tokenContract[network].address, start, beneficiaries, amounts);
};
