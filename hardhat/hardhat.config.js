require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "coinex_testnet",
  networks: {
    hardhat: {},
    coinex_testnet: {
      url: "https://testnet-rpc.coinex.net/",
      accounts: ["<YOUR-PRIVATE-KEY>"],
    },
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};

// 0xE4b121AD75466CF79a8975725CDD26C703740005
