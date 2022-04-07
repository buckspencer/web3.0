require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/veecggO-1Gm_oUUryJ5D5OWpc6naambW',
      accounts: ['37ef10b6d9b1a6e3ed4b7b4e86f1457792c8afddbe1afd99054f5289d638e1cf']
    }
  }
}
