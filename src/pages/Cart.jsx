import React, { useState } from "react";

const Cart = () => {
  const data = [
    {
      modelName: "Tesla Model S",
      price: 100_000,
      link: "https://www.tesla.com/inventory/new/ms?arrangeby=relevance&range=0",
      img: "tesla s.png",
    },
    {
      modelName: "Tesla Model 3",
      price: 50_000,
      link: "https://www.tesla.com/inventory/new/m3?arrangeby=relevance&range=0",
      img: "tesla 3.png",
    },
    {
      modelName: "Tesla Model Y",
      price: 60_000,
      link: "https://www.tesla.com/inventory/new/my?arrangeby=relevance&range=0",
      img: "tesla y.png",
    },
    {
      modelName: "Tesla Model X",
      price: 80_000,
      link: "https://www.tesla.com/inventory/new/mx?arrangeby=relevance&range=0",
      img: "tesla x.png",
    },
  ];

  const [cartList, setCartList] = useState([]);

  const listSum = (cartList) => {
    let summa = 0;
    if (cartList.length > 0) {
      for (let item of cartList) {
        console.log(item.element.price, item.quantity);
        summa += item.element.price * item.quantity;
      }
    }
    return summa;
  };

  const addItemToCart = (item) => {
    const itemInCart = cartList.find((el) => el.modelName === item.modelName);
    if (itemInCart) {
      const newCartList = [...cartList];
      newCartList.find((item) => item.modelName === itemInCart.modelName)
        .quantity++;
      setCartList(newCartList);
    } else {
      setCartList([
        ...cartList,
        {
          modelName: item.modelName,
          element: item,
          quantity: 1,
        },
      ]);
    }
  };

  const addExistingItem = (item) => {
    const itemInCart = cartList.find((el) => el.modelName === item.modelName);
    const newCartList = [...cartList];
    newCartList.find((item) => item.modelName === itemInCart.modelName)
      .quantity++;
    setCartList(newCartList);
  };

  const removeExistingItem = (item) => {
    const itemInCart = cartList.find((el) => el.modelName === item.modelName);
    const newCartList = [...cartList];
    newCartList.find((item) => item.modelName === itemInCart.modelName)
      .quantity--;
    setCartList(newCartList);
  };

  return (
    <div className="CartLayout">
      <div className="cards">
        {data.map((card) => (
          <div className="card" key={card.modelName}>
            <div className="card-img">
              <img src={card.img} alt="car pic" />
            </div>
            <div className="card-descr">
              <div className="card-descr-top">
                <div className="card-modelName">{card.modelName}</div>
                <div className="card-icons">
                  <div className="addToCart">
                    <img
                      src="add.png"
                      alt="add"
                      onClick={(e) => addItemToCart(card)}
                    />
                  </div>
                  <div className="card-info">
                    <a href={card.link} target="blank">
                      <img src="info.png" alt="info" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-price">${card.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart">
        <div className="cart-top">
          <div className="cart-top-img">
            <img src="garage.png" alt="garage" />
          </div>
          <div className="cart-top-text">КОРЗИНА</div>
        </div>
        <div className="cart-list">
          {cartList.map(function (item) {
            if (item.quantity > 0) {
              return (
                <div className="cart-item" key={item.modelName}>
                  <div className="cart-item-name">{item.modelName}</div>
                  <div className="cart-item-quantity">{item.quantity} шт.</div>
                  <div className="cart-item-btns">
                    <img
                      src="add.png"
                      alt="add"
                      onClick={(e) => {
                        addExistingItem(item);
                      }}
                    />
                    <img
                      src="remove.png"
                      alt="remove"
                      onClick={(e) => {
                        removeExistingItem(item);
                      }}
                    />
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="cart-sum">СУММА: ${listSum(cartList)}</div>
      </div>
    </div>
  );
};

export default Cart;
