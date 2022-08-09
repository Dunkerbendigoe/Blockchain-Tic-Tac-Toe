// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

    contract Tictactoe {
        address payable p1Address;
        address payable p2Address;
        uint[] board = new uint[](9);
        uint winCondition;
        uint turnNumber;

        //function makeMove(uint board[]) returns (){

        //}

        constructor(address payable p2) {
            p1Address = payable(msg.sender);
            p2Address = p2;
            turnNumber = 1;
        }

        function subCheckWin(uint a, uint b, uint c) private view returns (bool){
            return board[a]>0 && board[a]==board[b] && board[b]==board[c];
        }


        function myTurn(uint _turnNumber) public view returns (bool) {
            return (msg.sender == p1Address && _turnNumber == 1) || (msg.sender == p2Address && _turnNumber == 2);

        }

        function kill() public {
            if (msg.sender == p1Address && winCondition>0) {
            selfdestruct(p1Address); 
        }
        }

        function validMove(uint a) public view returns (bool){
            return !(winCondition>0 || a<0 || a>8 || board[a]>0) &&
                ((msg.sender == p1Address && turnNumber==1) || (msg.sender == p2Address && turnNumber==2));
        }

        function displayBoard() public view returns(uint[] memory){
            return board;
        }

        function winCheck() public view returns (uint){
            for (uint i = 0; i < 3; i++) {
            if (subCheckWin(i,3+i,6+i)) {
                return board[i];
            }
            if (subCheckWin(3*i,3*i+1,3*i+2)) {
                return board[3*i];
            }
        }
        if (subCheckWin(0,4,8)) {
            return board[0];
        }
        if (subCheckWin(2,4,6)) {
            return board[2];
        }
        if (board[0]+board[1]+board[1]+board[1]+board[1]+board[1]+board[1]+board[1]+board[1] == 13){
            return 3;
        }
        return 0;
        }

        function play(uint a) public {
            if (validMove(a)) {
            board[a] = turnNumber;
            if (turnNumber==1) {
                turnNumber = 2;
            } else { 
                turnNumber = 1;
            }
            winCondition = winCheck();
        } else {
            revert();
        }
        }

    function winner() public view returns (uint) {

        //getter for the winner attribute
        if (winCondition>0) {
            return winCondition;
        } else {
            return 0;
        }    
    }

        function newGame(address payable p2) public {
            p1Address = payable(msg.sender);
            p2Address = p2;
            turnNumber = 1;
            board = new uint[](9);
            winCondition = 0;
        }

    }
