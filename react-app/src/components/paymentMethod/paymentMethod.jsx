import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import React, { useState } from "react";
import { newKitFromWeb3 } from "@celo/contractkit";

function PaymentMethod() {
  const [provider, setProvider] = useState(null);
  const [kit, setKit] = useState(null);
  const [someAddress, setSomeAddress] = useState(
    "0x5038ae19CDf0B623e6e8015249ecF58A1165D653"
  );

  const connect = async () => {
    const provider = new WalletConnectProvider({
      rpc: {
        44787: "https://alfajores-forno.celo-testnet.org",
        42220: "https://forno.celo.org",
      },
    });

    await provider.enable();

    const web3 = new Web3(provider);
    let kit = newKitFromWeb3(web3);

    kit.defaultAccount = provider.accounts[0];

    provider.on("accountsChanged", (accounts) => {
      console.log(accounts, "this is the accounts");
    });

    setProvider(provider);
    setKit(kit);
  };

  const sendcUSD = async () => {
    try {
      let amount = kit.web3.utils.toWei("0.001", "ether");

      const stabletoken = await kit.contracts.getStableToken();

      const tx = await stabletoken
        .transfer(someAddress, amount)
        .send({ feeCurrency: stabletoken.address });
      const receipt = await tx.waitReceipt();
      console.log(receipt);
      alert("Successful")
    } catch (err) {
      alert(err);
    }
  };

  const disconnect = async () => {
    await provider.disconnect();
    setProvider(null);
    setKit(null);
  };

  let button, account;

  if (provider !== null) {
    button = (
      <div>
        <button onClick={() => sendcUSD()}>Send 0.001 cUSD</button>
      </div>
    );
  } else {
    button = (
      <div>
        <button onClick={() => connect()}>Connect</button>
      </div>
    );
  }

  if (kit !== null) {
    account = kit.defaultAccount;
  }

  return (
    <div >
      <header>
       
        <p>
          SCAN <code></code> T0 PAY
        </p>
        {button}
        <p>{account}</p>
        <button onClick={() => disconnect()}>Disconnect</button>
      </header>
    </div>
  );
}

export default PaymentMethod;
