import { lockliftChai, LockliftConfig } from "locklift";
import { FactorySource } from "./build/factorySource";
import * as dotenv from "dotenv";
import chai from "chai";
import "@broxus/locklift-deploy";
import { Deployments } from "@broxus/locklift-deploy";


dotenv.config();
chai.use(lockliftChai);

declare global {
  const locklift: import("locklift").Locklift<FactorySource>;
}

declare module "locklift" {
  //@ts-ignore
  export interface Locklift {
      deployments: Deployments<FactorySource>;
  }
}

// Create your own link on https://dashboard.evercloud.dev/

const config: LockliftConfig = {
  compiler: {
    // Specify path to your TON-Solidity-Compiler
    // path: "/mnt/o/projects/broxus/TON-Solidity-Compiler/build/solc/solc",

    // Or specify version of compiler
    version: "0.62.0",

    // Specify config for extarnal contracts as in exapmple
    // externalContracts: {
    //   "node_modules/broxus-ton-tokens-contracts/build": ['TokenRoot', 'TokenWallet']
    // }
  },
  linker: {
    // Specify path to your stdlib
    // lib: "/mnt/o/projects/broxus/TON-Solidity-Compiler/lib/stdlib_sol.tvm",
    // // Specify path to your Linker
    // path: "/mnt/o/projects/broxus/TVM-linker/target/release/tvm_linker",

    // Or specify version of linker
    version: "0.15.48",
  },
  networks: {
    everscale_devnet_jrpc: {
      // Specify connection settings for https://github.com/broxus/everscale-standalone-client/
      connection: {
        id: 1,
        type: 'jrpc',
        group: 'dev',
        data: {
          endpoint: process.env.DEVNET_JRPC_NETWORK_ENDPOINT ?? '',
        },
      },

      // This giver is default Wallet
      giver: {
        address: process.env.DEVNET_GIVER_ADDRESS ?? '',
        key: process.env.DEVNET_GIVER_KEY ?? ''
      },
      keys: {
        // Use everdev to generate your phrase
        // !!! Never commit it in your repos !!!
        phrase: process.env.DEVNET_PHRASE ?? '',
        amount: 3000,
      },
    },
  },
  mocha: {
    timeout: 2000000,
  },
};

export default config;
