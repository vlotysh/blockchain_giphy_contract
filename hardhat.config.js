// https://eth-ropsten.alchemyapi.io/v2/vWijJP7X0LfLou-ZuBYRNcEz0q8a5seU

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/vWijJP7X0LfLou-ZuBYRNcEz0q8a5seU',
      accounts: ['024598977769b505976c0ab8a86b9d5e7483c070883f642cb6933e2bafacf69c']
    }
  }
}

//Transactions deployed to: 0x58D629E11e3E0C750fF72327Be94aFD2b0cC9d67