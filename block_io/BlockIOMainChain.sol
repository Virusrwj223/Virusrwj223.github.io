// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract test{

    address payable public myAccount;

    constructor() {
        myAccount = payable(msg.sender);
    }

    //create renter
    struct Person {
        address payable rWalletAddress;
        string firstName;
        uint start;
        uint latestRentDue;
        uint rentNotificationReceived;
        uint end;
        bool hasRentPaid;
        uint depositAmount;
        bool hasActiveRental;
        uint rentalDeposit;
        uint monthlyRental;
    }
    mapping(address => Person) public renters;

    function addPerson(
        address payable rWalletAddress,
        string memory firstName,
        uint start,
        uint latestRentDue,
        uint rentNotificationReceived,
        uint end,
        bool hasRentPaid,
        uint depositAmount,
        bool hasActiveRental,
        uint rentalDeposit,
        uint monthlyRental
    ) public {
        renters[rWalletAddress] = Person(
            rWalletAddress,
            firstName,
            start,
            latestRentDue,
            rentNotificationReceived,
            end,
            hasRentPaid,
            depositAmount,
            hasActiveRental,
            rentalDeposit,
            monthlyRental
        );
    }

    function firstPurchase(address externaladdress, uint _rentDuration, uint _deposit, uint _monthlyRent) public{
        renters[externaladdress].depositAmount-=_deposit;
        renters[externaladdress].start=block.timestamp;
        renters[externaladdress].end=block.timestamp+_rentDuration*86400;
        renters[externaladdress].latestRentDue=block.timestamp+2629743;
        renters[externaladdress].hasRentPaid=true;
        renters[externaladdress].hasActiveRental=true;
        renters[externaladdress].rentNotificationReceived = renters[externaladdress].latestRentDue;
        renters[externaladdress].rentalDeposit=_deposit;
        renters[externaladdress].monthlyRental=_monthlyRent;
    }

    function deposit() public payable {
        renters[msg.sender].depositAmount+=msg.value;
    }

    function withdraw(address payable externaladdress, uint256 _amount) payable public {
        externaladdress.transfer(_amount);
        renters[externaladdress].depositAmount-=_amount;
    }

    function ownerWithdrawal(uint256 _amount) payable public{
        myAccount.transfer(_amount);
    }

    function payMonthlyRent(address externaladdress, uint _rentAmount) public {
        require(renters[externaladdress].depositAmount>=_rentAmount);
        require(block.timestamp>=renters[externaladdress].latestRentDue);
        renters[externaladdress].depositAmount-=_rentAmount;
        renters[externaladdress].hasRentPaid=true;
        renters[externaladdress].latestRentDue=block.timestamp+2629743;

    }
    function earlyTerminateRental(address externaladdress, uint _rentAmount) public {
        uint256 overdueBalance=(_rentAmount/2629743)*(block.timestamp-(renters[externaladdress].latestRentDue-2629743));
        require(renters[externaladdress].depositAmount>=overdueBalance);
        require(renters[externaladdress].hasRentPaid==true);
        renters[externaladdress].depositAmount-=overdueBalance;
        renters[externaladdress].hasActiveRental=false;
        renters[externaladdress].hasRentPaid=false;
    }
    

}