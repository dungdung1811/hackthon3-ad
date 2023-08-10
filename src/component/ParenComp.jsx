import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

function ParenComp() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Cola",
      price: 6,
      image:
        "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
    },

    {
      id: 2,
      title: "Sprite",
      price: 5,
      image: "https://images.ofix.com/product-image/s99509_2.jpg",
    },
    {
      id: 3,
      title: "Ayran",
      price: 3,
      image:
        "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
    },
    {
      id: 4,
      title: "Salgam",
      price: 4,
      image: "http://esenlik.com.tr//images/prod/5704.jpg",
    },
    {
      id: 5,
      title: "Cay",
      price: 3,
      image:
        "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg",
    },
    {
      id: 6,
      title: "Kahve",
      price: 10,
      image:
        "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ=",
    },
    {
      id: 7,
      title: "Soda",
      price: 4,
      image: "http://esenlik.com.tr//images/prod/2928.jpg",
    },
    {
      id: 8,
      title: "Bisiklet",
      price: 10,
      image:
        "https://productimages.hepsiburada.net/s/37/375/10567819821106.jpg",
    },

    {
      id: 9,
      title: "Bugatti Chiron",
      price: 250,
      image:
        "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg",
    },
    {
      id: 10,
      title: "Iskender",
      price: 50,
      image:
        "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg",
    },
    {
      id: 11,
      title: "Lahmacun",
      price: 12,
      image:
        "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
    },
    {
      id: 12,
      title: "Malikane",
      price: 23,
      image:
        "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg",
    },
    {
      id: 13,
      title: "Helicopter",
      price: 28,
      image:
        "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg",
    },
    {
      id: 14,
      title: "Luxury Yatch",
      price: 17,
      image: "https://d.neoldu.com/news/57966.jpg",
    },
    {
      id: 15,
      title: "Limosine",
      price: 112,
      image:
        "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
    },
    {
      id: 16,
      title: "Ada",
      price: 125,
      image: "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg",
    },
  ]);

  //   b6
  const [cartProduct, setCartProduct] = useState([]);
  // add to cart
  const addtocart = (product) => {
    const existingProduct = cartProduct.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
      setCartProduct([...cartProduct]);
    } else {
      setCartProduct([...cartProduct, { ...product, quantity: 1 }]);
    }
  };

  const [isCartModel, setIsCartModel] = useState(false);
  const closeCartModel = () => {
    setIsCartModel(false);
  };
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      const editQuantity = cartProduct.map((e) =>
        e.id === itemId ? { ...e, quantity: newQuantity } : e
      );
      setCartProduct(editQuantity);
    }
  };

  //  DElete
  const handelDeleteCart = (cart) => {
    const deleteCart = cartProduct.filter((e) => e.id !== cart);
    setCartProduct(deleteCart);
  };

  return (
    <div>
      <main className="main">
        <section className="box-1">
          <div className="container">
            <nav className="nav-menu">
              <p>ACADEMY_SHOP</p>

              <ul className="menu-icon">
                <li>
                  <i className="fa-solid fa-user" />
                </li>
                <li>
                  <i className="fa-solid fa-magnifying-glass" />
                </li>
                <li>
                  <i className="fa-solid fa-cart-shopping" />
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section className="box-3">
          <div className="container">
            {/* render product */}
            <div className="product-hunt">
              {data.map((element, index) => (
                <div key={index} className="product-1">
                  <Product
                    elementProduct={element}
                    addtocart={addtocart}
                    cartProduct={cartProduct}
                    updateQuantity={updateQuantity}
                  />
                </div>
              ))}
            </div>

            {/* end render product */}
          </div>
        </section>
      </main>
      <div className="box-all">
        <div className="table_list">
          <div className="table_list-container">
            <div>
              <h2>List of selected products</h2>
              <div className="search-and-sort">
                <div className="form-search">
                  <input
                    type="text"
                    placeholder="Nhập tên cần tìm kiếm"
                    className="search-value"
                  />
                  <button className="search">Search</button>
                </div>
              </div>
            </div>
            {/* card model */}
            <Cart
              cartProduct={cartProduct}
              closeCartModel={closeCartModel}
              updateQuantity={updateQuantity}
              handelDeleteCart={handelDeleteCart}
            />
            {/* card model end */}
            {/* <button onClick={() => setIsCartModel(true)}>View Cart</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParenComp;
