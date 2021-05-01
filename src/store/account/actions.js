export function deposit(amountToDeposite) {
  return {
    type: "ACCOUNT/DEPOSIT",
    payload: amountToDeposite,
  };
}
export function spend(amountToSpend) {
  return {
    type: "DECREMENT",
    payload: amountToSpend,
  };
}
