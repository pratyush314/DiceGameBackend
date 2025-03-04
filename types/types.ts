export interface RollDiceRequest {
  betAmount: number;
  walletBalance: number;
}

export interface RollDiceResponse {
  roll: number;
  newBalance: number;
  hash: string;
}
export interface RollDiceResponseError {
  error: string;
}
export interface ResetBalanceRequest {
  balance: number;
}
export interface ResetBalanceResponse {
  success: true;
}
