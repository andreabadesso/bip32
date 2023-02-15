import { Buffer } from 'buffer';

if (typeof global !== 'undefined') {
    global.Buffer = Buffer;
}

export {
  BIP32Interface,
  fromSeed,
  fromBase58,
  fromPublicKey,
  fromPrivateKey,
} from './bip32';
