import Web3 from "web3";
import { AbiItem } from "web3-utils";

export interface TransactionDetails {
    web3: Web3, 
    sender: string, 
    recipient: string, 
    amount: number, 
    abi: AbiItem, 
    token: string
}