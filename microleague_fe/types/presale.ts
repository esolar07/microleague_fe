export interface PermitDomain {
  name: string;
  chainId: 84531 | 84532;
  verifyingContract: `0x${string}`;
}

export interface PermitMessage {
  owner: `0x${string}`;
  spender: `0x${string}`;
  value: bigint;
  nonce: bigint;
  deadline: bigint;
}
