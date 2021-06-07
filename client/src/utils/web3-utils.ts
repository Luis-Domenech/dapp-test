// import { BNB_TEST } from "./constants"
// import { Contract } from 'web3-eth-contract'
import Web3 from 'web3'
import { AbiItem } from "web3-utils"

export async function attemptTokenPayment(web3: Web3, sender: string, recipient: string, amount: number, abi: AbiItem, token: string) {
    return new Promise((resolve, reject) => {
        
        const dev_token_instance = new web3.eth.Contract(abi, token)

        // Create transaction from token's transfer method
        let tx = {
            from: sender,
            to: token,
            data: dev_token_instance.methods.transfer(recipient, web3.utils.toWei(amount.toString())).encodeABI(),
            gas: 5000000,
        }
        
        // Send transaction. MetaMask will manage this.
        web3.eth.sendTransaction(tx)
        .then(res => {
            resolve({transaction: res})
        })
        .catch(err => {
            resolve({error: err})
        });
    })
}

// export async function attemptRegularPayment(web3, sender, recipient, amount, coin) {
// return new Promise((resolve, reject) => {
    
//     // Create transaction from token's transfer method
//     let tx = {
//         from: sender,
//         to: token._address,
//         data: token.methods.transfer(recipient, web3.utils.toWei(amount.toString())).encodeABI(),
//         gas: 5000000,
//     }
    
//     // Send transaction. MetaMask will manage this.
//     web3.eth.sendTransaction(tx)
//     .then(res => {
//         resolve({transaction: res})
//     })
//     .catch(err => {
//         resolve({error: err})
//     });
// })
// }