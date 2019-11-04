// Import our contract artifacts and turn them into usable abstractions.
 web3 = new Web3(web3.currentProvider);
const contractAddress = "0x2f64EF30fc3A0E4c902cAFD358d81Fa2E0f70bbF";
      const contractABI= [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "burn",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Burn",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "freeze",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "success",
                    "type": "bool"
                }
            ],
            "name": "Freeze",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newRate",
                    "type": "uint64"
                }
            ],
            "name": "setRate",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "newRate",
                    "type": "uint64"
                }
            ],
            "name": "SetRate",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "to",
                    "type": "address"
                },
                {
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "tokenAddress",
                    "type": "address"
                },
                {
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "transferAnyERC20Token",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "unFreeze",
            "outputs": [
                {
                    "name": "success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "withdraw",
            "outputs": [
                {
                    "name": "result",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "_totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_holder",
                    "type": "address"
                },
                {
                    "name": "_spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "name": "remaining",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokenOwner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "currentOwner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "currentRate",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "currentStatus",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "isSoldout",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "rate",
            "outputs": [
                {
                    "name": "",
                    "type": "uint64"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]

const goldMint = web3.eth.contract(contractABI).at(contractAddress);
var wei //Amount of eth in selected account
// var status; //success or failiure
// var action //Sent,Recieved or Purchased for history table


window.App = {


    start: function() {
        // console.log(web3.eth.getBalance("0X14B43A98E3E27F1D8E4A4E72218E8F351F79FFB7"));
        
        console.log("add:",isAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d'));

        $("#noeth").hide();
        $("#noadd").hide();
        $("#noamount").hide();
        $("#loweth").hide();
        $("#lowtoken").hide();
        $("#process").hide();
        $("#loader1").hide();
        $("#loader2").hide();
        $("#buyprocess").hide();
        $("#myModal1").modal('hide');


        $("#process").text("Please wait... Your transaction is being processed"); 
        $("#buyprocess").text("Please wait... Your transaction is being processed"); 
        
        $("#address").val(web3.eth.coinbase);
        $("#addresscommon").text(web3.eth.coinbase);
           
    

    $.getJSON('https://api-ropsten.etherscan.io/api?module=account&action=balance&address='+web3.eth.coinbase+'&tag=latest&apikey=6FKPVABZRBT68J1EWB8Z7HUZDK6BEH7EI7',function(databl) {
    var ethbal = databl.result;
    wei =ethbal/Math.pow(10,18);
    console.log(wei);
    $("#eth").text(wei);
    });

     
        
       

        goldMint.balanceOf(web3.eth.coinbase,(err,res)=>{
            if(res) {
                $("#balance1").text(web3.fromWei(res,"ether")+" GMT");
                $("#balance2").text(web3.fromWei(res,"ether")+" GMT");
                $("#balance3").text(web3.fromWei(res,"ether")+" GMT");
                $("#balance4").text(web3.fromWei(res,"ether")+" GMT");
            
            }
            
            else{
                $("#balance").text(web3.fromWei("Not available"));
            }
        })  
    },
    buy: function() {
        
        $("#buyprocess").hide();
        $("#process").hide();
        $("#loweth").hide();
        $("#lowtoken").hide();
       
        flag = isNaN(($("#amount_eth")).val());
        console.log("flag",flag);
        
        if((flag == false) && ($("#amount_eth").val() > 0) && ($("#amount_eth").val()<=wei)){
            console.log("success");
            $("#noeth").hide();
        web3.eth.sendTransaction({from:web3.eth.coinbase,to:contractAddress,value:web3.toWei($("#amount_eth").val(),"ether")},(error, result)=>{
            if(!error) {
                window.alert("Success! Your Balance will update soon.");
                $("#buyprocess").text("Please wait... Your transaction is being processed"); 
                $("#buyprocess").show();
                $("#loader1").show();



            }
            else{
                console.log(wei);
                console.log("Something went wrong! Please try later");
                $("#buyprocess").text("Something went wrong! Please try again"); 
                $("#buyprocess").show();

            }
    
        });  
    }
    else if($("#amount_eth").val()>wei)
    {
    console.log("low eth");
    $("#buyprocess").hide();
    $("#loweth").show();
    document.getElementById('amount_eth').value=''; 

    }
    else if(flag == true || ($("#amount_eth").val() <= 0))
    {
    console.log("invalid amount");
    $("#noeth").show();
    document.getElementById('amount_eth').value=''; 
    }

    // else{
    // $("#errormssg").show();
    // }

    },
    sent: function() {

        $("#buyprocess").hide();
        $("#process").hide();
        $("#loweth").hide();
        $("#lowtoken").hide();
        $("#myModal1").modal('hide');
        

        flag = isNaN(($("#amount_ccx")).val());
        console.log("flag",flag);

        var lowaddress= $("#sent").val().toLowerCase();

        
        // else
        // {
        //     $("#myModal1").modal('hide');
        //     console.log("different");
        // }

        if((flag == false) && ($("#amount_ccx").val() > 0) && (lowaddress != '') && parseFloat($("#balance3").text()) >= $("#amount_ccx").val() && isAddress(lowaddress)){
            
            
            console.log(parseFloat($("#balance3").text()));
    //    console.log(web3.toWei($("#amount_ccx").val(),"ether"))
        goldMint.transfer($("#sent").val(),web3.toWei($("#amount_ccx").val(),"ether"),(err,res)=>{
            if(!err) {
                console.log("Success! Your Coin will transfer soon.");
                // alert("Success! Your Coin will transfer soon.");
                $("#process").text("Please wait... Your transaction is being processed"); 
                $("#process").show();
                $("#loader2").show();
            }
            
            else{
                console.log("Something went wrong! Please try later");
                $("#process").text("Something went wrong! Please try again"); 
                $("#process").show();
            }
        });
    }
    else if (($("#sent").val() != '') && ($("#amount_ccx").val() == '')){
        $("#noamount").show();
    }
    else if (($("#sent").val() == '') && ($("#amount_ccx").val() != '')){
        $("#noadd").show();
    }
    else if($("#amount_ccx").val() == '' && $("#sent").val() == '') {
        $("#noamount").show();
        $("#noadd").show();
    }
    else if($("#amount_ccx").val() <= 0){
        $("#noamount").show();
        document.getElementById('amount_ccx').value=''; 

    }
    else if(parseFloat($("#balance3").text()) <= $("#amount_ccx").val()){
        // $("#process").text("Insufficient Balance");
        $("#lowtoken").show();
        document.getElementById('amount_ccx').value=''; 
    }
    else if(isAddress(lowaddress) != true){
        console.log("wrong address");
        $("#noadd").show();
    }
    
    },
    warning: function() {
        $("#myModal1").modal('show');
    },

    
}

$("#buy").click(function(){

    App.buy();

})



function through(){ 

    if(($('#sent').val() == (web3.eth.coinbase))||($('#sent').val() == web3.eth.coinbase.toUpperCase()) && $('#amount_ccx').val()!='' &&  !isNaN(($("#amount_ccx")).val())){
        console.log("warning")
        App.warning();
    }
    else{
        console.log("sent")
        App.sent();
    }
}


window.addEventListener('load', async function() {
    $("#reload-notification").click(function(){
      location.reload();
    })

    $("#readmore-btn").click(function(){
      $('#read-more-model').modal('show');

    })

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      await ethereum.enable();
    
      console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
      web3 = new Web3(web3.currentProvider);
      if( web3.eth.coinbase == null){
            window.location.reload();

        }

      if (web3.eth.coinbase == null) {
        $("#metamask-notification").text("Metamask is locked. Please unlock your Metamask.");
        $('#myModal').modal('show');
        $("#readmore-msg").text("your walete is locked. Please unlock your metamask to use your walete.");
        $("#readmore-img").attr("src","images/Metamask locked.png");
      }
      else if (web3.version.network != 3)
      {
        $('#myModal').modal('show');
        $("#metamask-notification").text("Metamask is in wrong network.");
        $("#readmore-msg").text("Please Change the network into 'Main Ethereum Network' .");
        $("#readmore-img").attr("src","images/wrong-nw.png");
      }
      else{
        $('#myModal').modal('hide');
      }
     
      App.start();
       log();
    } else {
      $('#myModal').modal('show');
      $("#metamask-notification").text("Metamask is NOT installed.");
      $("#readmore-msg").text("Please install metamask.");
    }
  
    
  });

var account = web3.eth.accounts[0]; //For dynamically changing the adderss displayed, when account is changed

var accountInterval = setInterval(function() {
    //console.log("gggg",web3.eth.accounts[0] )
    if (web3.eth.accounts[0] !== account) {
        account = web3.eth.accounts[0];
        App.start();
        log();
       
  }
}, 100);

// function getBalance (address) {
//     return new Promise (function (resolve, reject) {
//       web3.eth.getBalance(address, function (error, result) {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(result);
//           }
//       })
//     })
//   }
//console.log("am inside log")
function log(){
   // console.log("am inside log",tnx)

    for (var i = txn.rows.length - 1; i > 0; i--) {
        txn.deleteRow(i);
    }
  $.getJSON('http://api-ropsten.etherscan.io/api?module=account&action=tokentx&address='+web3.eth.coinbase+'&startblock=0&endblock=999999999&sort=asc&apikey=6FKPVABZRBT68J1EWB8Z7HUZDK6BEH7EI7', function(data) {
        
     console.log(data.result[0]);
     console.log(contractAddress);

      for(var i=0; i<data.result.length; i++){
          if(data.result[i].contractAddress.toUpperCase() == contractAddress.toUpperCase())
          {
        //   console.log("time:", dt);
          var dt = data.result[i].timeStamp;
          console.log("time:", dt);
          var myDate = new Date( dt *1000);
          //console.log(myDate);
          var gmt = (myDate.toLocaleString());
        //   ^myDate.toGMTString()+"<br>"+^

          var action;
          var num = data.result.length-i;
          
            if(data.result[i].from == web3.eth.coinbase && data.result[i].input != '0x' && data.result[i].to != web3.eth.coinbase)
            {
    
                action = "Sent";
                // console.log("action:", action);
            }
            else if(data.result[i].to == web3.eth.coinbase && data.result[i].input != '0x')
            {
                action = "Received";
                // console.log("action:", action);


            }
            else if(data.result[i].to == web3.eth.coinbase && data.result[i].input =='0x')
            {
                action = "Buy";
                // console.log("action:", action);

            }
          var txhash = data.result[i].hash;
        //   console.log("hash:", txhash);
          


          var table = document.getElementById("txn");
          var row = table.insertRow(1);
          var SiNo = row.insertCell(0);
          var Datetime = row.insertCell(1);
          var Action =  row.insertCell(2);
          var Txhash =  row.insertCell(3);
          SiNo.innerHTML = num;
          Datetime.innerHTML = gmt;
          Action.innerHTML = action;


        Txhash.innerHTML = (txhash.link("https://ropsten.etherscan.io/tx/"+txhash));
         
        // window.openTxhash.innerHTML;
    
    }
          
      }
      });
          
}

var buytransferEvent = goldMint.Transfer();

buytransferEvent.watch(function(error, result){
    console.log(result);
    //  var filter = web3.eth.filter(address);
    //  console.log("expe:", filter);
  
    console.log("from:",result.args.from);
    console.log("to:",result.args.to);
    console.log("self:",$("#address").val());
    if(result.args.from == $("#address").val() || result.args.to == $("#address").val() || result.args.from == $("#addresscommon").val() || result.args.to == $("#addresscommon").val()){
        if (!error){
          
          console.log("buy:transfer success");
          App.start();
          $("#buyprocess").text("Last Transaction Successful");
          $("#process").text("Last Transaction Successful");
  
          $("#buyprocess").show();
          $("#process").show();
          
  
          document.getElementById('amount_eth').value=''; 
          document.getElementById('amount_ccx').value=''; 
          document.getElementById('sent').value='';

          setTimeout(log, 10000);
        }
    }
  });



  /**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/
var isAddress = function (address) {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        // check if it has the basic requirements of an address
        return false;
    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
        // If it's all small caps or all all caps, return true
        return true;
    }
};

