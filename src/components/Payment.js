import React from "react";
import { useDispatch } from "react-redux";
import { deposit, spend } from "../store/account/actions";

export default function Payment() {
  const dispatch = useDispatch();
  return (
    <div className="table-responsive">
      <table className="table " style={{ color: "white" }}>
        <caption>PEPOLE You OWN MONEY.</caption>
        <thead>
          <tr>
            <th> Name </th>
            <th> City </th>
            <th> Phone </th>
            <th>RECIVE</th>
            <th>SEND</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Lorem </td>
            <td> AMSTERDAM </td>
            <td> 2034938411 </td>
            <td>
              {" "}
              <button
                onClick={() => {
                  dispatch(deposit(4030));
                }}>
                4030$
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  dispatch(spend(1080));
                }}>
                1080$
              </button>
            </td>
          </tr>
          <tr>
            <td> Joe </td>
            <td> Bangaluru </td>
            <td> 8723495860 </td>
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
                  dispatch(spend(120));
                }}>
                120$
              </button>
            </td>
          </tr>
          <tr>
            <td> Mariana </td>
            <td> Toronto </td>
            <td> 3002298484 </td>
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
                  dispatch(spend(0));
                }}>
                0$
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
