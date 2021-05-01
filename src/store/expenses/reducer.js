const initialState = {
  allExpenses: [
    {
      name: "T-mobile  ",
      earn: 0,
      spend: 60,
    },
    {
      name: "Netflix",
      earn: 0,
      spend: 13,
    },
    {
      name: "training",
      earn: 0,
      spend: 300,
    },
    {
      name: "EY",
      earn: 500,
      spend: 0,
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "EXPENSES/ADDNEW": {
      return {
        ...state,
        allExpenses: [...state.allExpenses, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
