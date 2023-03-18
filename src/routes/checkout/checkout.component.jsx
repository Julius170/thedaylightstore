import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";
import { styleButton } from "../authentication/authentication.component";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";

let res = "";
let obj = {};
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

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
      let amount = kit.web3.utils.toWei(`${cartTotal}`, "ether");

      const stabletoken = await kit.contracts.getStableToken();

      const tx = await stabletoken
        .transfer(someAddress, amount)
        .send({ feeCurrency: stabletoken.address });
      const receipt = await tx.waitReceipt();
      console.log(receipt);
      alert("Successful");
    } catch (err) {
      alert(err);
    }
  };

  const disconnect = async () => {
    await provider.disconnect();
    setProvider(null);
    setKit(null);
  };

  let button, account, disconnectprop;

  if (provider !== null) {
    button = (
      <div>
        <button
          style={{
            ...styleButton,
            border: "none",
            padding: "1rem",
            margin: "2.3rem 0",
            borderRadius: "8px",
            listStyleType: "none",
          }}
          onClick={() => sendcUSD()}
        >
          Purchase Item
        </button>
      </div>
    );
    disconnectprop = (
      <div>
        <button
          style={{
            ...styleButton,
            border: "none",
            padding: "1rem",
            margin: "2.3rem 0",
            borderRadius: "8px",
            listStyleType: "none",
          }}
          onClick={() => disconnect()}
        >
          Disconnect
        </button>
      </div>
    );
  } else {
    button = (
      <div>
        <button
          style={{
            ...styleButton,
            border: "none",
            padding: "1rem",
            margin: "2.3rem 0",
            borderRadius: "8px",
            listStyleType: "none",
          }}
          onClick={() => connect()}
        >
          Connect
        </button>
      </div>
    );
  }

  if (kit !== null) {
    account = kit.defaultAccount;
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Prod.</span>
        </div>
        <div className="header-block">
          <span>Desc.</span>
        </div>
        <div className="header-block">
          <span>Qnt.</span>
        </div>
        <div className="header-block">
          <span>Prc.</span>
        </div>
        <div className="header-block">
          <span>Rm.</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        const { productName } = cartItem;
        if (!obj[productName]) {
          obj[productName] = productName;
          res = res + " *" + productName;
        }
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <div className="total">TOTAL: $ {cartTotal}</div>

    

      {button}
      <span>{account? "You are connected to " + account + " click on purchase item": ""}</span>
      {disconnectprop}
    </div>
  );
};

export default Checkout;
