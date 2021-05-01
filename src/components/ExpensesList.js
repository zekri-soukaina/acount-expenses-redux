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
{
  /* <div className="table-responsive">
          <table className="table " style={{ color: "white" }}>
            <caption>MY MONTHLY EXPANCE</caption>
            <thead>
              <tr>
                <th> PERSONAL </th>

                <th>EARN</th>
                <th>SPEND</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> EY 4d/m </td>
                <td>
                  {" "}
                  <button
                    onClick={() => {
                      dispatch(deposit(500));
                    }}>
                    500$
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(spend(0));
                    }}>
                    0$
                  </button>
                </td>
              </tr>
              <tr>
                <td> lazer </td>
                <td>
                  {" "}
                  <button
                    onClick={() => {
                      dispatch(deposit(0));
                    }}>
                    0
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(spend(150));
                    }}>
                    150$
                  </button>
                </td>
              </tr>
              <tr>
                <td> assurance</td>

                <td>
                  {" "}
                  <button
                    onClick={() => {
                      dispatch(deposit(100));
                    }}>
                    100$
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(spend(120));
                    }}>
                    120$
                  </button>
                </td>
              </tr>
              <tr>
                <td>fecial</td>

                <td>
                  {" "}
                  <button
                    onClick={() => {
                      dispatch(deposit(0));
                    }}>
                    0$
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(spend(150));
                    }}>
                    150$
                  </button>
                </td>
              </tr>
              <tr>
                <td>T-mobile</td>

                <td>
                  {" "}
                  <button
                    onClick={() => {
                      dispatch(deposit(0));
                    }}>
                    0$
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(spend(60));
                    }}>
                    60$
                  </button>
                </td>
              </tr>
              <tr>
                <td>Netflex</td>

                <td>
                  {" "}
                  <button
                    onClick={() => {
                      dispatch(deposit(0));
                    }}>
                    0$
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(spend(13));
                    }}>
                    13$
                  </button>
                </td>
              </tr>
              <tr>
                <td>Training</td>

                <td>
                  {" "}
                  <button
                    onClick={() => {
                      dispatch(deposit(0));
                    }}>
                    0$
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(spend(300));
                    }}>
                    300$
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */
}
