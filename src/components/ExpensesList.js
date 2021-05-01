import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllExpenses } from "../store/expenses/selectors";
import { deposit, spend } from "../store/account/actions";

export default function ExpensesList() {
  const list = useSelector(selectAllExpenses);
  console.log(list);

  const dispatch = useDispatch();

  return (
    <div className="table-responsive">
      <table className="table " style={{ color: "white" }}>
        <caption>MY MONTHLY EXPENSES</caption>
        <thead>
          <tr>
            <th> PERSONAL </th>

            <th>EARN</th>
            <th>SPEND</th>
          </tr>
        </thead>
        <tbody>
          {list ? (
            list.map((item, index) => {
              return (
                <tr key={index}>
                  <td> {item.name} </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        dispatch(deposit(item.earn));
                      }}>
                      {item.earn}$
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(spend(item.spend));
                      }}>
                      {item.spend}$
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <p>Loading..</p>
          )}
        </tbody>
      </table>
    </div>
  );
}
