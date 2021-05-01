import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, spend } from "../store/account/actions";
import { selectAccountValue } from "../store/account/selectors";

export default function Header() {
  const dispatch = useDispatch();
  const amount = useSelector(selectAccountValue);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p>My Total account: {amount}$</p>

      <button
        onClick={() => {
          dispatch(deposit(100));
        }}>
        deposit 100$
      </button>

      <button
        onClick={() => {
          dispatch(spend(10));
        }}>
        spend 10$
      </button>
    </div>
  );
}
