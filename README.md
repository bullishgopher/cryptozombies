# Deploy smart contracts on localhost

Create `.env` for

REACT_APP_ROPSTEN_PROJECT_ID: Project Id from infura fro Ropsten network

CONTRACT_PRIVATE_KEY: Ropsten network private key from metamask

`yarn`

Install npm packages

`npx hardhat compile`

Compile smart contracts using hardhat

`yarn deploy:local`

Deploy smart contracts on localhost

`npx hardhat node`

Start HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

`npx hardhat console --network localhost`

To test on localhost

`const Box = await ethers.getContractFactory("ZombieFeeding")`

`const box = await Box.attach("0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9")`

`(await box.setKittyContractAddress("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"))`

Result:
```
{
  hash: '0x054e491af94e6fb6f85656a3a9f72ab54c61b4f09da7de3166e7dca81026f38f',
  type: 0,
  accessList: null,
  blockHash: '0x5d8a906cef7146834b4f2dca8caf34d6dd3b55812773e33d9a5c57a0b963e025',
  blockNumber: 8,
  transactionIndex: 0,
  confirmations: 1,
  from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  gasPrice: BigNumber { _hex: '0x01dcd65000', _isBigNumber: true },
  gasLimit: BigNumber { _hex: '0xb519', _isBigNumber: true },
  to: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
  value: BigNumber { _hex: '0x00', _isBigNumber: true },
  nonce: 7,
  data: '0x5f4623f1000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266',
  r: '0xb19bd534fd984867ed0a008ea398b561eff4fcac4dc504dcbe754b2691830d10',
  s: '0x5ad59deb2771d5348b337bef799c1d1b38cf0f43248733d7df29012c58f1c8a9',
  v: 2710,
  creates: null,
  chainId: 1337,
  wait: [Function (anonymous)]
}
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
