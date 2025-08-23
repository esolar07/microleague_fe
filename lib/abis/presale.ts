export const presaleAbi = [
  { "type":"function","name":"buy","stateMutability":"payable","inputs":[],"outputs":[] },
  { "type":"function","name":"finalize","stateMutability":"nonpayable",
    "inputs":[{"name":"treasury","type":"address"}],"outputs":[] },
  { "type":"function","name":"pricePerTokenWei","stateMutability":"view","inputs":[],"outputs":[{"type":"uint256"}]},
  { "type":"function","name":"hardCapTokens","stateMutability":"view","inputs":[],"outputs":[{"type":"uint256"}]},
  { "type":"function","name":"start","stateMutability":"view","inputs":[],"outputs":[{"type":"uint256"}]},
  { "type":"function","name":"end","stateMutability":"view","inputs":[],"outputs":[{"type":"uint256"}]},
  { "type":"function","name":"tokensSold","stateMutability":"view","inputs":[],"outputs":[{"type":"uint256"}]},
  { "type":"function","name":"finalized","stateMutability":"view","inputs":[],"outputs":[{"type":"bool"}]},
  { "type":"function","name":"owner","stateMutability":"view","inputs":[],"outputs":[{"type":"address"}]},
] as const;
