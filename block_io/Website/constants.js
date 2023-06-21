export const contractAddress = "0x0EfBec9e4eD2E2063066E38E2D711EC6f774E352";
export const abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "rWalletAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "firstName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "latestRentDue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rentNotificationReceived",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "hasRentPaid",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "hasActiveRental",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "rentalDeposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "monthlyRental",
        type: "uint256",
      },
    ],
    name: "addPerson",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "externaladdress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rentAmount",
        type: "uint256",
      },
    ],
    name: "earlyTerminateRental",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "externaladdress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rentDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_monthlyRent",
        type: "uint256",
      },
    ],
    name: "firstPurchase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "ownerWithdrawal",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "externaladdress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rentAmount",
        type: "uint256",
      },
    ],
    name: "payMonthlyRent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "externaladdress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "myAccount",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "renters",
    outputs: [
      {
        internalType: "address payable",
        name: "rWalletAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "firstName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "latestRentDue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rentNotificationReceived",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "hasRentPaid",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "hasActiveRental",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "rentalDeposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "monthlyRental",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
