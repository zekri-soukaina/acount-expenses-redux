import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewExpenses } from "../store/expenses/actions";

export default function AddExpenses() {
  const [name, setName] = useState("");
  const [earn, setEarn] = useState(0);
  const [spend, setSpend] = useState(0);

  const dispatch = useDispatch();
  return (
    <div>
      <h3>Add to the monthly Expenses </h3>
      <hr />
      <form
        style={{ display: "flex" }}
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(addNewExpenses({ name, earn, spend }));
          setName("");
          setEarn("");
          setSpend("");
        }}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          Earn $=
          <input
            type="number"
            value={earn}
            onChange={(e) => {
              setEarn(parseInt(e.target.value) ? parseInt(e.target.value) : "");
            }}
          />
        </label>
        <label>
          Spend $=
          <input
            type="number"
            value={spend}
            onChange={(e) => {
              setSpend(
                parseInt(e.target.value) ? parseInt(e.target.value) : ""
              );
            }}
          />
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
