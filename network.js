export default {
  id: 'likecoin-chain-sheungwan', // DEPRECATE, only used for Lunie extension, NOT CHAIN ID
  name: 'LikeCoin',
  description:
    'LikeCoin is a network of independent parallel blockchains, powered by BFT consensus algorithms like Tendermint.',
  logo: `logo.svg`,
  website: 'https://like.co',
  apiURL: 'http://116.207.131.37:8010/proxy', // use `npx lcp --proxyUrl http://34.123.30.100:1317`
  rpcURL: 'ws://116.207.131.37:26657',
  stakingDenom: 'MUON',
  coinLookup: [
    {
      viewDenom: 'MUON',
      chainDenom: 'umuon',
      chainToViewConversionFactor: 1e-6,
      icon: `currencies/muon.png`,
    },
  ],
  addressPrefix: 'cosmos',
  validatorAddressPrefix: 'cosmosvaloper',
  validatorConsensusaddressPrefix: 'cosmosvalcons', // needed to map validators from staking queries to the validator set
  HDPath: `m/44'/118'/0'/0/0`,
  lockUpPeriod: `3 days`,
  fees: {
    default: {
      gasEstimate: 350000,
      feeOptions: [
        {
          denom: 'MUON',
          amount: 0.001,
        },
      ],
    },
  },
  icon: `https://lunie.fra1.digitaloceanspaces.com/network-icons/cosmos.png`,

  // This is only to be used as a developer tool and for testing purposes
  // NEVER ENABLE LOCALSIGNING IN PRODUCTION OR FOR MAINNETS
  localSigning: false,
}
