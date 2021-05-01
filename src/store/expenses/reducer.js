const initialState = {
  allExpenses: [
    {
      name: "Mobile  ",
      earn: 0,
      spend: 60,
    },
    {
      name: "Netflix",
      earn: 0,
      spend: 13,
    },
    {
      name: "Training",
      earn: 0,
      spend: 300,
    },
    {
      name: "Assurance",
      earn: 100,
      spend: 120,
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
