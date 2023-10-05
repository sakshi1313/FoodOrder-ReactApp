import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
export default function Cart(props) {
  const cartItems = (
    <ul className={classes["class-items"]}>
      {[
        {
          id: "c1",
          name: "Sushi",
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
