const fs = require('fs')
const SmartInvoiceController = artifacts.require('SmartInvoiceController')
const SmartInvoice = artifacts.require('SmartInvoice')

module.exports = function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(SmartInvoice)
    const template = await SmartInvoice.deployed()
    const controller = await deployer.deploy(SmartInvoiceController, template.address, [])

    const { abi } = require('../smart-invoice-contracts/build/SmartInvoiceController.json')
    fs.writeFileSync('./tests/contract-data.json', JSON.stringify({ address: controller.address, abi }, null, ' '), 'utf8')
  })
}
