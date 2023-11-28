#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const web3_js_1 = require("@solana/web3.js");
const argv = yargs_1.default
    .usage('Usage: $0 <privateKey>')
    .demandCommand(1, 'Please provide a Solana private key as an integer array.')
    .argv;
(() => __awaiter(void 0, void 0, void 0, function* () {
    const privateKey = (yield argv)._[0];
    const uint8Array = Uint8Array.from(JSON.parse(privateKey));
    const keypair = web3_js_1.Keypair.fromSecretKey(uint8Array);
    console.log('Public Key:', keypair.publicKey.toBase58());
}))();
