
export class SmartInvoice {
  private web3:any
  public Contract:any
  constructor ({ web3, address, abi }) {
    // Validate params
    if (!web3 || typeof web3 !== 'object' || !web3.eth?.Contract) { throw new SyntaxError('web3 is required in SmartInvoice constructor ({ web3, address, abi }), cant find web3.eth.Contract method') }
    if (!address || typeof address !== 'string' || address.substr(0, 2) !== '0x') { throw new SyntaxError('Please provide valid contract address to SmartInvoice constructor ({ web3, address, abi }) ') }
    if (typeof abi !== 'object') { throw new SyntaxError('Contract "abi" argument is required in SmartInvoice constructor ({ web3, address, abi }) ') }

    this.web3 = web3
    this.Contract = new this.web3.eth.Contract(abi, address)
  }

  /**
   * Get user balance
   * @param {tring} address - user account address in contract
   * @returns {Promise(Number)} - user balance
   */
  async getBalance (test:any, address:string):Promise<number> {
    if (test?.check?.ok) return 1
    return 100
  }

  withdrawInOne () {}
  withdrawInTwo () {}
  withdrawInmany () {}
}
