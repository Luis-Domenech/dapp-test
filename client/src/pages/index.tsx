import { Box, Button, Flex, Heading, Link, Select, Spinner, Stack, Text } from "@chakra-ui/core";
import NextLink from 'next/link';
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Layout from "../components/Layout";
import { MakePaymentButton } from "../components/MakePaymentButton";
import { getWeb3 } from "../utils/getWeb3";
import { TransactionDetails } from "../utils/types";

import CoinbaseCommerceButton from 'react-coinbase-commerce';

// SCSS
import styles from '../styles/Home.module.scss'


const DevTokenContract = require("../contracts/DevToken.json")

const Index = () => {

  const [transactionDetails, setTransactionDetails] = useState<TransactionDetails>();
  const [web3, setWeb3] = useState<Web3>();
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [accounts, setAccount] = useState<string[]>([])
  const [networkChainId, setNetworkChainId] = useState<number>(0)

  useEffect(() => {
    setLoading(true)
    getWeb3()
    .then(w3 => {

        w3.eth.getAccounts()
        .then(accounts => {

          let transactionDetails: TransactionDetails = {
            web3: w3,
            sender: accounts[0],
            recipient: "0x964c2451e9005e5eB4b4271e271D7bd046396ef2",
            amount: 100,
            abi: DevTokenContract.abi,
            token: "0x2664d974eEeb3fD7f0484354D73eA12cFDbD6078"
          }
          
          w3.eth.net.getId()
          .then(id => {
            setNetworkChainId(id)
            setAccount(accounts)
            setWeb3(w3)
            setTransactionDetails(transactionDetails)
            setLoading(false)
          })
          
        })
        .catch(error => {
          console.log(error)
          setError(error)
          setLoading(false)
        })

    })
    .catch(error => {
        console.log(error)
        setError(error)
        setLoading(false)
    })
  }, [web3, accounts])
  
  return (

    <Layout>
      <Flex justifyContent="center" align="center" flexDir={["column", "row"]}>
        <Heading mb={[4, 0]}>Web3 Project</Heading>
      </Flex>
      <br />
      <br />

      {loading ? 
        <div>
        <Flex justifyContent="center" align="center" flexDir={["column", "row"]}>
          <Text mb={[4, 0]}>Getting user permission for wallet connection</Text>
        </Flex>
        <br />
        <Box mt={4} alignItems="center" textAlign="center"><Spinner size="xl" color="red.500" /></Box> 
        </div>
        : error !== "" ?
        <div>
        <Flex justifyContent="center" align="center" flexDir={["column", "row"]}>
          <Text mb={[4, 0]}>{error}</Text>
        </Flex>
        </div>
        :
        <div>
        <Stack align="center" spacing={8}>
            <Flex p={5} shadow="md" flexDir={["column", "row"]} w={["95%", "100%"]} borderWidth="1px" rounded={4}>
              <Box>
              {/* <Text className={styles.temp}>Wallet address: {accounts[0]}</Text> */}
              <Text>Wallet address: {accounts[0]}</Text>
              <Text>Web3 Version: {web3?.version}</Text>
              <Text>Network Chain Id: {networkChainId}</Text>
              </Box>
              <Box ml={4} flex={1}>
                <Box mt={[8, 24]}>
                  <MakePaymentButton transactionDetails={transactionDetails!}></MakePaymentButton>

                  <CoinbaseCommerceButton checkoutId={'e56d11d2-7c81-45c3-972d-e4cb0fd664d7'}/>

                </Box>
              </Box>
            </Flex>
        </Stack>
        </div>
      }
    </Layout>
  )
};

export default Index;
