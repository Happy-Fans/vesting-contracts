
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {

    testnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, '\'https://data-seed-prebsc-1-s1.binance.org:8545\''),
      network_id: 97,
      confirmations: 5,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 200,
      skipDryRun: true,
    },

    mainnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, 'https://bsc-dataseed1.ninicoin.io/'),
      network_id: 56,
      confirmations: 10,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 200,
      skipDryRun: true,
    },

    localhost: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
  },

  plugins: ['solidity-coverage', 'truffle-plugin-verify'],
  api_keys: {
    etherscan: process.env.BSCSCAN_KEY
  },

  compilers: {
    solc: {
      version: '0.8.3',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
