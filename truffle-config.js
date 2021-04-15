
module.exports = {
  // test_directory: './tests/',
  migrations_directory: './tests/migrations',
  build_directory: './tests/smart-invoice-contracts/build',
  contracts_build_directory: './tests/smart-invoice-contracts/build',
  contracts_directory: './tests/smart-invoice-contracts/contracts',

  networks: {
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: '*' // Any network (default: none)
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    colors: true
  },

  // Configure your compilers
  compilers: {
    solc: {
      parser: 'solcjs',
      version: '0.8.3',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
}
