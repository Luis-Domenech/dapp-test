import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import {getWeb3} from './getWeb3';

function useWeb3() {
  const [web3, setWeb3] = useState<Web3 | string | null>(null);

  useEffect(() => {
    getWeb3()
    .then(w3 => {
        setWeb3(w3!)
        return web3
    })
    .catch(error => {
        console.log(error)
        return "client didn't accept request"
    })
  })

  return web3
}