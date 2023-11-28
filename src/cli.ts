#!/usr/bin/env node
import yargs from 'yargs';
import { Keypair } from '@solana/web3.js';
const argv = yargs
  .usage('Usage: $0 <privateKey>')
  .demandCommand(1, 'Please provide a Solana private key as an integer array.')
  .argv;

(async () => {
    const privateKey = (await argv)._[0];
    const uint8Array = Uint8Array.from(JSON.parse(privateKey as string));
    const keypair = Keypair.fromSecretKey(uint8Array);
    console.log('Public Key:', keypair.publicKey.toBase58());
})();
