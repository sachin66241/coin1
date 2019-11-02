pragma solidity ^0.4.24;

// ----------------------------------------------------------------------------

// GMT Token contract
//
// Symbol      : GMT
// Name        : GoldMint Token
// Total supply: 1,000,000,000.000000000000000000
// Decimals    : 18
// ----------------------------------------------------------------------------


// ----------------------------------------------------------------------------

// Safe maths

// ----------------------------------------------------------------------------

library SafeMath {

    function add(uint a, uint b) internal pure returns (uint c) {

        c = a + b;

        require(c >= a);

    }

    function sub(uint a, uint b) internal pure returns (uint c) {

        require(b <= a);

        c = a - b;

    }

    function mul(uint a, uint b) internal pure returns (uint c) {

        c = a * b;

        require(a == 0 || c / a == b);

    }

    function div(uint a, uint b) internal pure returns (uint c) {

        require(b > 0);

        c = a / b;

    }

}


// ----------------------------------------------------------------------------

// ERC Token Standard #20 Interface

// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md

// ----------------------------------------------------------------------------

contract ERC20Interface {

    function totalSupply() public view returns (uint256);

    function balanceOf(address tokenOwner) public view returns (uint256 balance);

    function transfer(address to, uint256 tokens) public returns (bool success);

    function allowance(address holder, address spender) public view returns (uint256);

    function transferFrom(address from, address to, uint256 value) public returns (bool success);

    function approve(address spender, uint256 value) public returns (bool success);

    event Transfer(address indexed from, address indexed to, uint256 tokens);
 
    event Approval(address indexed owner, address indexed spender, uint256 value);
}



// ----------------------------------------------------------------------------

// Owned contract

// ----------------------------------------------------------------------------

contract Owned {

    address public owner;

    function transferOwnership(address newOwner) public returns(bool success);

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    event Freeze(bool success);

    event SetRate(uint64 newRate);

    constructor() public{

        owner = msg.sender;

    }


    modifier onlyOwner {

        require(msg.sender == owner);

        _;

    }
}



// ----------------------------------------------------------------------------

// ERC20 Token, with the addition of symbol, name and decimals and an

// initial fixed supply

// ----------------------------------------------------------------------------

contract GMT is ERC20Interface, Owned {

    using SafeMath for uint;


    string public symbol;

    string public  name;

    uint8 public decimals;

    uint256 public _totalSupply;

    uint64 public rate;

    bool public freeze = false; //Freeze state


    mapping(address => uint) balances;

      /* approve() allowances */
    mapping (address => mapping (address => uint256)) allowed;

    event Burn(address indexed from, uint256 value);

    modifier isAvailable{
        
        require(!freeze);
        
        _;
    }


    // ------------------------------------------------------------------------

    // Constructor

    // ------------------------------------------------------------------------

    constructor() public {

        symbol = "GMT";

        name = "GoldMint Token";

        decimals = 18;

        rate = 10;

        _totalSupply = 1000000000 * 10**uint(decimals);

        balances[owner] = _totalSupply;

        emit Transfer(address(0), owner, _totalSupply);

    }


    // ------------------------------------------------------------------------

    // Do accept ETH

    // ------------------------------------------------------------------------



    function () public payable {
        require(
            msg.value > 0 &&
            isSoldout() == false &&
            balances[owner] >= msg.value.mul(rate) &&
            freeze==false
        );
      
        uint256 tokens = msg.value.mul(rate);
        balances[owner] = balances[owner].sub(tokens);
        balances[msg.sender] = balances[msg.sender].add(tokens);
        owner.transfer(msg.value);
        emit Transfer (owner,msg.sender,tokens);

    }


     // ------------------------------------------------------------------------

    // Change Ownership

    // ------------------------------------------------------------------------


    function transferOwnership(address newOwner) public onlyOwner isAvailable returns(bool success) {
   
        require(newOwner != address(0));
        balances[newOwner] = balances[owner];
        balances[owner] = 0;
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
        return true;
 
    }




    // ------------------------------------------------------------------------

    // Total supply

    // ------------------------------------------------------------------------

    function totalSupply() public view returns (uint256) {

        return _totalSupply  - balances[address(0)];

    }
    
    // ------------------------------------------------------------------------

    // Current Rate

    // ------------------------------------------------------------------------

    function currentRate() public view returns (uint64) {

        return rate;

    }
    
    // ------------------------------------------------------------------------

    // Current Owner

    // ------------------------------------------------------------------------

    function currentOwner() public view returns (address) {

        return owner;

    }

    // ------------------------------------------------------------------------

    // Current status

    // ------------------------------------------------------------------------

    function currentStatus() public view returns (bool) {

        return freeze;

    }




    // ------------------------------------------------------------------------

    // Get the token balance for account `tokenOwner`

    // ------------------------------------------------------------------------

    function balanceOf(address tokenOwner) public view returns (uint256 balance) {

        return balances[tokenOwner];

    }



    // ------------------------------------------------------------------------

    // Transfer the balance from token owner's account to `to` account

    // - Owner's account must have sufficient balance to transfer

    // - 0 value transfers are allowed

    // ------------------------------------------------------------------------

    function transfer(address to, uint256 tokens) public isAvailable returns (bool success) {

        balances[msg.sender] = balances[msg.sender].sub(tokens);

        balances[to] = balances[to].add(tokens);

        emit Transfer(msg.sender, to, tokens);

        return true;

    }
    
    function setRate(uint64 newRate) public onlyOwner isAvailable returns (bool success) {
        
        rate = newRate;
        emit SetRate(rate);        
        return true;

    }


    function isSoldout() public view returns (bool) {

        return(       
            balances[owner] < 1
        );
    }


    // ------------------------------------------------------------------------

    // Returns the amount of tokens approved by the owner that can be

    // transferred to the spender's account

    // ------------------------------------------------------------------------

    // function allowance(address tokenOwner, address spender) public view returns (uint remaining) {

    //     return allowed[tokenOwner][spender];

    // }


    // ------------------------------------------------------------------------
    // Owner can withdraw ether if token received.
    // ------------------------------------------------------------------------
    function withdraw() public onlyOwner returns (bool result) {
        
        return owner.send(address(this).balance);
        
    }
    
    // ------------------------------------------------------------------------

    // Owner can transfer out any accidentally sent ERC20 tokens

    // ------------------------------------------------------------------------

    function transferAnyERC20Token(address tokenAddress, uint256 tokens) public onlyOwner isAvailable returns (bool success) {

        return ERC20Interface(tokenAddress).transfer(owner, tokens);

    }

     /**
     * Freeze and unfreeze ICO.
     */
    function freeze() public onlyOwner returns(bool success) {
        freeze = true;
        emit Freeze(freeze);
        return freeze;
    }

    function unFreeze() public onlyOwner returns(bool success) {
        freeze = false;
        emit Freeze(freeze);
        return freeze;
    }

    function burn() public isAvailable onlyOwner {
        emit Burn(owner, balances[owner]);
        balances[owner] = 0;
    }

    function approve(address _spender, uint256 _value) public isAvailable returns (bool success) {
        // To change the approve amount you first have to reduce the addresses`
        //  allowance to zero by calling `approve(_spender, 0)` if it is not
        //  already 0 to mitigate the race condition described here:
    
        require((_value == 0) || (allowed[msg.sender][_spender] == 0));

        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _holder, address _spender) public constant returns (uint256 remaining) {
        return allowed[_holder][_spender];
    }

    function transferFrom(address _from, address _to, uint256 _value) public isAvailable returns (bool success) {
        uint256 _allowance = allowed[_from][msg.sender];

        balances[_to] = balances[_to].add(_value);
        balances[_from] = balances[_from].sub(_value);
        allowed[_from][msg.sender] = _allowance.sub(_value);
        emit Transfer(_from, _to, _value);
        return true;
    }

}
