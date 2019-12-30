pragma solidity ^0.5.0;
contract Simple {
  string public name = "abc";

  function setName(string memory _name) public {
    name = _name;
  }
}