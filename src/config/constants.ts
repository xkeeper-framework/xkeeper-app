import { Constants } from '~/types';

const constants: Constants = {
  DEFAULT_THEME: 'dark',
  DEFAULT_CHAIN: 1,
  DEFAULT_ETH_ADDRESS: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  vaultFactoryVersion: 'V1.0.0',

  addresses: {
    '1': {
      AutomationVaultFactory: '0xf54e6fC4a5FCD074323412eBb2025a05D4BeBA48',
      xKeeperMetadata: '0x64f3B5b611C0d9c3bc791f4aFBac79407615A06B',
      relays: {
        GelatoRelay: '0x3149b0dDAEF10dDE28Aa516483567C051B73c260',
        OpenRelay: '0xF189A71422579fdD4677b2BD963982E01b412f4e',
        Keep3rRelay: '0x7958625CA0639c3278FFb8565Ea3f73D915e4705',
        Keep3rBondedRelay: '0xcE30018341E483019Cc46a019982Ce00941E08DA',
      },
    },
    '10': {
      AutomationVaultFactory: '0xf54e6fC4a5FCD074323412eBb2025a05D4BeBA48',
      xKeeperMetadata: '0x64f3B5b611C0d9c3bc791f4aFBac79407615A06B',
      relays: {
        GelatoRelay: '0x3149b0dDAEF10dDE28Aa516483567C051B73c260',
        OpenRelay: '0xF189A71422579fdD4677b2BD963982E01b412f4e',
        Keep3rRelay: '0x5cA2Ce0c96A2B8a4b913C10ac86F2860804Dac83',
        Keep3rBondedRelay: '0xD22defe59422D5C78c1083334F9bE9A71E8761EF',
      },
    },
    '137': {
      AutomationVaultFactory: '0xf54e6fC4a5FCD074323412eBb2025a05D4BeBA48',
      xKeeperMetadata: '0x64f3B5b611C0d9c3bc791f4aFBac79407615A06B',
      relays: {
        GelatoRelay: '0x3149b0dDAEF10dDE28Aa516483567C051B73c260',
        OpenRelay: '0xF189A71422579fdD4677b2BD963982E01b412f4e',
        Keep3rRelay: '0x5cA2Ce0c96A2B8a4b913C10ac86F2860804Dac83',
        Keep3rBondedRelay: '0xD22defe59422D5C78c1083334F9bE9A71E8761EF',
      },
    },
    '11155111': {
      AutomationVaultFactory: '0xF1c053Dd144eA450870FAdC879aDBB3BFc43098A',
      xKeeperMetadata: '0x9038165aCC0C92BC9f49321349F4203d66a921A1',
      relays: {
        GelatoRelay: '0x354fC69b287B0fA3038b68C4239e42A9Cf495851',
        Keep3rRelay: '0xeD42564484237c782D6c445924dab0aabDfEbA97',
        Keep3rBondedRelay: '0x4627f3b2467235637084bf52ECF7484a054Bb29d',
        OpenRelay: '0xc9adA92F31969EE9728a33531F9C81Dc6e81d0Fb',
      },
    },
    '11155420': {
      AutomationVaultFactory: '0xF1c053Dd144eA450870FAdC879aDBB3BFc43098A',
      xKeeperMetadata: '0x9038165aCC0C92BC9f49321349F4203d66a921A1',
      relays: {
        GelatoRelay: '0x354fC69b287B0fA3038b68C4239e42A9Cf495851',
        Keep3rRelay: '0xA4E3d3957437b872f4FC6ba3Dea6777000371071',
        Keep3rBondedRelay: '0xFa6F9DD5d7F950C7ADD8a997395Fb59fac5050C2',
        OpenRelay: '0xc9adA92F31969EE9728a33531F9C81Dc6e81d0Fb',
      },
    },
  },

  availableChains: {
    '1': {
      displayName: 'Ethereum Mainnet',
      name: 'ethereum',
      id: 1,
      scanner: 'https://etherscan.io',
      apiUrl: 'https://api.etherscan.io/api',
      alchemyUrl: 'https://eth-mainnet.alchemyapi.io/v2',
      nativeToken: {
        symbol: 'ETH',
        name: 'Ether',
      },
    },
    '10': {
      displayName: 'OP Mainnet',
      name: 'optimism',
      id: 10,
      scanner: 'https://optimistic.etherscan.io',
      apiUrl: 'https://api-optimistic.etherscan.io/api',
      alchemyUrl: 'https://optimism-mainnet.g.alchemy.com/v2',
      nativeToken: {
        symbol: 'ETH',
        name: 'Ether',
      },
    },
    '137': {
      displayName: 'Polygon Mainnet',
      name: 'polygon',
      id: 137,
      scanner: 'https://polygonscan.com/',
      apiUrl: 'https://api.polygonscan.com/api',
      alchemyUrl: 'https://polygon-mainnet.g.alchemy.com/v2',
      nativeToken: {
        symbol: 'MATIC',
        name: 'Matic',
      },
    },
    '11155111': {
      displayName: 'Sepolia',
      name: 'sepolia',
      id: 11155111,
      scanner: 'https://sepolia.etherscan.io',
      apiUrl: 'https://api-sepolia.etherscan.io/api',
      alchemyUrl: 'https://eth-sepolia.g.alchemy.com/v2',
      nativeToken: {
        symbol: 'ETH',
        name: 'Ether',
      },
    },
    '11155420': {
      displayName: 'OP Sepolia',
      name: 'op-sepolia',
      id: 11155420,
      scanner: 'https://sepolia-optimism.etherscan.io/',
      apiUrl: 'https://api-sepolia-optimistic.etherscan.io/api',
      alchemyUrl: 'https://opt-sepolia.g.alchemy.com/v2',
      nativeToken: {
        symbol: 'ETH',
        name: 'Ether',
      },
    },
  },
};

export const getConstants = (): Constants => {
  return constants;
};
