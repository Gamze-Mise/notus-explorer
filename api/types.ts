export interface Block {
  row_no: number;
  uid: string;
  data: BlockData;
}

export interface Transaction {
  id: number;
  rowNo: string;
  data: Data;
  transactionId: string;
  receiver: string;
  sender: string;
  timestamp: string;
  date: number;
  isMulti: number;
}

interface BlockData {
  info: Info;
  cipher: Cipher;
  hash: Hash;
  validator: Validator;
  nonce: Nonce2;
  prev: string;
  sign: string;
  txNum: number;
  feeTotal: number;
}

interface Nonce2 {
  block: string;
  data: string;
  info: string;
}

interface Validator {
  count: Record<string, number>;
  map: MapInterface;
  sign: string;
}

interface MapInterface {
  block: Record<number, string>;
  data: Record<number, string>;
  info: Record<number, string>;
}

interface Hash {
  block: string;
  data: string;
  info: string;
  FINAL: string;
}

interface Cipher {
  ver: string;
  data: string;
  sign: string;
}

interface Info {
  version: number;
  type: number;
  uID: string;
  time: string;
  multi: boolean;
  rowNo: number;
  nonce: Nonce;
  node: Node;
  prevList: Record<number, string>;
}

interface Node {
  id: string;
  master: boolean;
  replicant: boolean;
  broadcaster: boolean;
  validator: boolean;
  executor: boolean;
  keeper: Keeper;
}

interface Keeper {
  key: boolean;
  block: boolean;
  file: boolean;
  tor: boolean;
}

interface Nonce {
  method: number;
  type: number;
  difficulty: number;
}

///vbeenekvn

interface Data {
  Sender: Sender;
  Receiver: Receiver;
  CurrentTime: number;
  UnlockTime: number;
  Currency: string;
  Volume: string;
  Fee: string;
  PublicKey: string;
  Sign: string;
}

interface Receiver {
  Wallet: string;
  Balance: Record<string, Record<number, string>>;
  WitnessRowNo: number;
  WitnessBlockUid: string;
}

interface Sender {
  Wallet: string;
  Balance: Record<string, Record<number, string>>;
  WitnessRowNo: number;
  WitnessBlockUid: string;
}
