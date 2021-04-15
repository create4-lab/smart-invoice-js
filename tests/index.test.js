/* eslint-disable no-new */
const { SmartInvoice } = require('../lib/index.js')
const { address, abi } = require('./contract-data.json')

contract('SmartInvoiceController lib test', () => {
  describe('Validate contructor params', () => {
    it('Web3 is required in conctructor', async (done) => {
      try {
        new SmartInvoice({ web3: { notweb3object: 1 }, abi: {}, address: '0x' })
      } catch (err) {
        if (err instanceof SyntaxError) {
          done()
        } else {
          done(err)
        }
      }
    })

    it('address is required in conctructor', async (done) => {
      try {
        new SmartInvoice({ web3, abi: {}, address: '_dfghjk__' })
      } catch (err) {
        if (err instanceof SyntaxError) {
          done()
        } else {
          done(err)
        }
      }
    })

    it('ABI is required in conctructor', async (done) => {
      try {
        new SmartInvoice({ web3, abi: '', address: '0xOK' })
      } catch (err) {
        if (err instanceof SyntaxError) {
          done()
        } else {
          done(err)
        }
      }
    })
  })
})
