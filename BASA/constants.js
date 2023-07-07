export const contractAddress = "0x50e2923Af1B158ee814b403564DDedc3A9F3Cd30";
export const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "rWalletAddress",
        type: "address",
      },
    ],
    name: "addPerson",
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
        name: "listingNum",
        type: "uint256",
      },
    ],
    name: "deactivateListing",
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
        internalType: "address",
        name: "landlordaddress",
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
      {
        internalType: "uint256",
        name: "_listingNum",
        type: "uint256",
      },
    ],
    name: "firstPurchase",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "externaladdress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_monthlyRental",
        type: "uint256",
      },
    ],
    name: "newListing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "numUsers",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    ],
    name: "payMonthlyRent",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "person",
    outputs: [
      {
        internalType: "address payable",
        name: "rWalletAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "listingNum",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deposit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "monthlyRental",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "isActiveListing",
            type: "uint256",
          },
        ],
        internalType: "struct test.Landlord",
        name: "landlordDetails",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "rWalletAddress",
            type: "address",
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
          {
            internalType: "address",
            name: "lWalletAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenNum",
            type: "uint256",
          },
        ],
        internalType: "struct test.Renter",
        name: "RenterDetails",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "currentListingNum",
        type: "uint256",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "personToLandlord",
    outputs: [
      {
        internalType: "uint256",
        name: "listingNum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "monthlyRental",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "isActiveListing",
        type: "uint256",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "personToRenter",
    outputs: [
      {
        internalType: "address payable",
        name: "rWalletAddress",
        type: "address",
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
      {
        internalType: "address",
        name: "lWalletAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenNum",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "registeredAddresses",
    outputs: [
      {
        internalType: "address",
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
];
