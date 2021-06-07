import { Box, IconButton, Link } from '@chakra-ui/core';
import { Icon } from "@chakra-ui/icon"
import { FaEthereum } from "react-icons/fa"
import NextLink from 'next/link';
import React from 'react';

import Web3 from 'web3'
import { AbiItem } from 'web3-utils';
import { attemptTokenPayment } from '../utils/web3-utils';
import { TransactionDetails } from '../utils/types';

interface MakePaymenButtonProps {
  transactionDetails: TransactionDetails
}

export const MakePaymentButton: React.FC<MakePaymenButtonProps> = ({ transactionDetails }) => {

  async function pay() {
    let transaction = await attemptTokenPayment(transactionDetails.web3, transactionDetails.sender, transactionDetails.recipient, transactionDetails.amount, transactionDetails.abi, transactionDetails.token)
    console.log(transaction)
  }

  return (
    <Box textAlign="right" mt="auto">
      {/* <IconButton icon={<ViewIcon />} _hover={{bg: "dark.400"}} bg="dark.500" as={Link} mt={24} aria-label="View Anime"></IconButton> */}
      <IconButton icon={<FaEthereum />} aria-label="Make Payment" onClick={pay}></IconButton>
    </Box>
  );
}

export default MakePaymentButton