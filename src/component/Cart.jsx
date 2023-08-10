import React from "react";

function Cart({ cartProduct, closeCartModel, updateQuantity, handelDeleteCart}) {
  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>số lượng</th>
            <th>Price</th>
            <th>total</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartProduct.map((e, i) => (
            <tr key={i} className="style-table">
              <td>{i + 1}</td>
              <td>{e.title}</td>
              <td>
                <img src={e.image} alt="" />
              </td>
              <td>
                <button onClick={() => updateQuantity(e.id, e.quantity - 1)}>-</button>
                {e.quantity}
                <button onClick={() => updateQuantity(e.id, e.quantity + 1)}>+</button>
              </td>

              <td>{e.price}$</td>
              <td>{(e.price)*(e.quantity)}$</td>

              <td>
                <button className="btn-denger"  onClick={() => handelDeleteCart(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button onClick={closeCartModel}>close</button> */}
    </div>
  );
}

export default Cart;
