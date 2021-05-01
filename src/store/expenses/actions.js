export const addNewExpenses = ({ name, earn, spend }) => {
  return {
    type: "EXPENSES/ADDNEW",
    payload: {
      name,
      earn,
      spend,
    },
  };
};
