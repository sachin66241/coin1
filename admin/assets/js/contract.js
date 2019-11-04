async function connect(){
	
	if (typeof web3 !== 'undefined') {
		var enb = await ethereum.enable();
	
			web3 = new Web3(web3.currentProvider)
			//console.log(web3.eth.coinbase);
		
		if( web3.eth.coinbase == null){
			window.location.reload();

		}
		if (web3.eth.coinbase == null) {
			$("#modalHeading").text("Metamask is locked. Please unlock your Metamask.");
			$("#modalText").text("Unlock metamask to access this portal");
			$("#modalImage").attr("src","assets/img/MetamaskLocked.png");
			$('.modal-overlay, .modal').removeClass('active');
			$('.modal-overlay, .modal').addClass('active');
			$('.close-modal').click(function () {
				$('.modal-overlay, .modal').removeClass('active');
			});
		}
		else if (web3.version.network != 3){
			// console.log(web3.version.network);
			$("#modalHeading").text("Metamask is in wrong network.");
			$("#modalText").text("Please Change the network into 'Ropsten Network' .");
			$("#modalImage").attr("src","assets/img/wrong-nw.png");
			$('.modal-overlay, .modal').removeClass('active');
			$('.modal-overlay, .modal').addClass('active');
			$('.close-modal').click(function () {
				$('.modal-overlay, .modal').removeClass('active');
			});
		}
		else{
			$('.modal-overlay, .modal').removeClass('active');
		}
		
	}
	else {
		var elements = $('.modal-overlay, .modal');
	//	$("#modalText").text("Unlock metamask to access this portal");
		$("#modalText").text("Install metamask to access this portal");
		$("#modalHeading").text("Metamask not installed");
		$("#modalImage").attr("src","assets/img/metamask.png");
		$('.close-modal').click(function () {
			elements.removeClass('active');
		});
		elements.addClass('active');
	}
	
}

connect();



/////////////////////////////////////////////////////////////////////

	//////////////////////  code  ///////////////////////////////////////
	const contractAddress = "0x2f64EF30fc3A0E4c902cAFD358d81Fa2E0f70bbF";
	const contractABI= 
		[
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
	
	
	
	const goldmint = web3.eth.contract(contractABI).at(contractAddress);

	function currentRate(){
		var currentRate;
		
		goldmint.currentRate((err,res)=>{
				if(res) {
					
					currentRate = res;
					$("#currentRate").text("1 ETH : "+ res +" GMT");
				}
				else{
					$("#currentRate").text("Not available");
				}
			})  
		}

	function setRate(){
		if($("#newRate").val()!=currentRate){
			console.log($("#newRate").val());
			goldmint.setRate($("#newRate").val(),(err,res)=>{
				if(res){
					$("#btnRate").attr('disabled',true);
					$("#info1").show();
				}
			});
		}
	}

	function transfer() {
		console.log(web3.toWei($("#gmtAmount").val()));
		goldmint.transfer($("#address").val(),web3.toWei($("#gmtAmount").val(),"ether"),(err,res)=>{
			if(res) {
				$("#info3").show();
				$("#gmtAmount").val("");
				$("#address").val("");
			}
			else	alert("Something went wrong! Please try later");
		});
	}

	function freeze(){
		goldmint.freeze((err,res)=>{
			if(res){
				$('#freeze').attr('disabled',true);
				$("#unFreeze").attr('disabled',true);
			}
		});
	}

	function unFreeze(){
		goldmint.unFreeze((err,res)=>{
			if(res){
				$('#freeze').attr('disabled',true);
				$("#unFreeze").attr('disabled',true);
			}
		});
	}

	function changeOwner(){
		goldmint.transferOwnership($("#OwnerAddress").val(),(err,res)=>{
			if(res){
				$("#info4").show();
				$("#BtnChangeOwner").attr('disabled',true);
			}
		});
	}

	function balance(){
		goldmint.balanceOf($("#OwnerAddress").val(),(err,res)=>{
			if(res){
				console.log(res)
			}
		})
	}

	function withdraw(){
		goldmint.withdraw((err,res)=>{
			if(res){
				$("#info2").show();
				$("#btnWithdraw").attr('disabled',true);
			}
			else	alert("Something went wrong. Please try again");
		})
	}

	function currentStatus(){
		goldmint.currentStatus((err,res)=>{
			if(!err){
				if(res){
					$("#unFreeze").attr('disabled',false);
					$("#freeze").attr('disabled',true);
					$("#description").text("The function allows the owner to unfreeze the contracts in case if it is freezed");
				}
				else
				{
					$("#freeze").attr('disabled',false);
					$("#unFreeze").attr('disabled',true);
					$("#description").html("The function allows the owner to freeze/pause the contract for a while.<br> This will not initiate any transaction via contract during this period");
				}
			}
		});
	}

	
	var transferEvent = goldmint.Transfer();

	transferEvent.watch(function(error, result){
		if (!error){
			$("#info3").hide();
		}
	});

	var rateChangeEvent = goldmint.SetRate();

	rateChangeEvent.watch(function(error, result){
	if (!error)
		{		  
			currentRate();
			$("#info1").hide();
			$("#btnRate").attr('disabled',false);
			$("#newRate").val("");
		}
	});

	var ownerChangeEvent = goldmint.OwnershipTransferred();
	ownerChangeEvent.watch(function(err,res){
		if(!err){
			$("#info4").hide();
			$("#BtnChangeOwner").attr('disabled',false);
			$("#OwnerAddress").val("");
		}
	});

	var statusChangeEvent = goldmint.Freeze();
	statusChangeEvent.watch(function(err,res){
		if(!err){
			currentStatus();
		}
	});