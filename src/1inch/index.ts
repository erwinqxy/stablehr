import axios from "axios";
import Web3 from "web3";
//import {broadCastRawTransaction} from "../broadcast-api";

export async function getQuote(from: string, to: string, amount: string, authKey: string, network: number): Promise<string | null> {
    try {
        const options = {
            method: 'GET',
            url: `https://api.1inch.dev/swap/v5.2/${network}/quote?src=${from}&dst=${to}&amount=${amount}`,
            headers: {
                'Authorization': `Bearer ${authKey}`,
            },
        };
        const result = await axios.request(options);
        return result.data.toAmount
    } catch (e) {
        console.error(e)
        return null
    }
}

export async function buildSwapTx(from: string, to: string, amount: string, fromAddress: string, slippage: number, network: number, authKey: string, receiverAddress: string): Promise<string | null> {
    try {
        const options = {
            method: 'GET',
            url: `https://api.1inch.dev/swap/v5.2/${network}/swap?src=${from}&dst=${to}&amount=${amount}&from=${fromAddress}&slippage=${slippage}&receiver=${receiverAddress}&disableEstimate=true`,
            headers: {
                'Authorization': `Bearer ${authKey}`,
            },
        };
        const result = await axios.request(options);
        result.data.tx.gas = "8000000";
        return result.data.tx;
    } catch (e) {
        console.error(e)
        return null
    }
}

export async function signAndSendTransaction(web3: Web3, pk: string, transaction: any): Promise<any> {
    const {rawTransaction} = await web3.eth.accounts.signTransaction(transaction, pk);
    return await web3.eth.sendSignedTransaction(rawTransaction || "");
    // return await broadCastRawTransaction(rawTransaction, network, authKey, isPrivate);
}

export function getAddressFromPrivateKey(privateKey: string): string {
    const web3 = new Web3();
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    return account.address;
}