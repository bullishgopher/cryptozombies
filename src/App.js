import React from 'react';
import web3Modal from "web3modal";
import { Web3Provider } from '@ethersproject/providers';
import { Toaster } from 'react-hot-toast';

import useGasPrice from './hooks/GasPrice';
import useUserProvider from './hooks/UserProvider';
import useContractLoader from './hooks/ContractLoader';
import useContractReader from './hooks/ContractReader';
import useEventListener from './hooks/EventListener';

import Transactor from './Transactor';
import { targetNetwork, targetNetworkProvider } from './const';
import './App.css';

function App() {
  const [injectedProvider, setInjectedProvider] = React.useState();
  const gasPrice = useGasPrice(targetNetwork, "fast");
  const userProvider = useUserProvider(injectedProvider, targetNetworkProvider);
  // The transactor wraps transactions and provides notificiations
  const tx = Transactor(userProvider, gasPrice)
  // Load in your local 📝 contract and read a value from it:
  const readContracts = useContractLoader(targetNetworkProvider)
  // If you want to make 🔐 write transactions to your contracts, use the userProvider:
  const writeContracts = useContractLoader(userProvider)

  // keep track of a variable from the contract in the local React state:
  const purpose = useContractReader(readContracts,"YourContract", "purpose")
  //📟 Listen for broadcast events
  const setPurposeEvents = useEventListener(readContracts, "YourContract", "SetPurpose", localProvider, 1);


  const handleGenerateClick = () => {
  }

  const loadWeb3Modal = React.useCallback(async () => {
    const provider = await web3Modal.connect();
    setInjectedProvider(new Web3Provider(provider));
  }, [setInjectedProvider]);

  React.useEffect(() => {
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Crypto zombies</h2>
      </header>

      <main>
        <section>
          <div>
            <input type="text" />
            <button type="button" onClick={handleGenerateClick}>Generate</button>
          </div>
        </section>
      </main>

      <Toaster />
    </div>
  );
}

export default App;
