
import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [selectedSize, setSelectedSize] = useState("M");
  const [productQuantity, setProductQuantity] = useState(1);

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [lastOrderTotal, setLastOrderTotal] = useState(0);

  // 15 PRODUCTS
  const products = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 29.99,
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      description: "A comfortable and stylish white T-shirt for everyday wear.",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
    },
    {
      id: 2,
      name: "Premium Denim Jeans",
      price: 49.99,
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      description: "Premium quality denim jeans with a modern fit.",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600"
    },
    {
      id: 3,
      name: "Modern Fashion Outfit",
      price: 59.99,
      category: "Women",
      sizes: ["S", "M", "L", "XL"],
      description: "A beautiful modern outfit designed for style and comfort.",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=600"
    },
    {
      id: 4,
      name: "Classic Watch",
      price: 39.99,
      category: "Accessories",
      sizes: ["One Size"],
      description: "A stylish classic watch for everyday and special occasions.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
    },
    {
      id: 5,
      name: "Kids Fashion Hoodie",
      price: 24.99,
      category: "Kids",
      sizes: ["S", "M", "L", "XL"],
      description: "A soft and comfortable hoodie for kids.",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600"
    },
    {
      id: 6,
      name: "Black Casual Shirt",
      price: 34.99,
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      description: "A premium black casual shirt for a smart look.",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600"
    },
    {
      id: 7,
      name: "Women's Summer Dress",
      price: 54.99,
      category: "Women",
      sizes: ["S", "M", "L", "XL"],
      description: "A beautiful summer dress with a comfortable fit.",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600"
    },
    {
      id: 8,
      name: "Leather Handbag",
      price: 69.99,
      category: "Accessories",
      sizes: ["One Size"],
      description: "An elegant handbag for everyday use.",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"
    },
    {
      id: 9,
      name: "Men's Sports Sneakers",
      price: 64.99,
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      description: "Comfortable sneakers for walking and casual wear.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
    },
    
    {
      id: 11,
      name: "Kids Casual T-Shirt",
      price: 19.99,
      category: "Kids",
      sizes: ["S", "M", "L", "XL"],
      description: "A soft casual T-shirt for active kids.",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600"
    },
    {
      id: 12,
      name: "Stylish Sunglasses",
      price: 22.99,
      category: "Accessories",
      sizes: ["One Size"],
      description: "Modern sunglasses for a fashionable look.",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
    },
    {
      id: 14,
      name: "Men's Denim Jacket",
      price: 74.99,
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      description: "A classic denim jacket for a modern casual style.",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"
    },
    {
      id: 15,
      name: "Fashion Backpack",
      price: 44.99,
      category: "Accessories",
      sizes: ["One Size"],
      description: "A practical and stylish backpack for daily use.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"
    },
    {
      id: 16,
      name: "Premium Black Hoodie",
      price: 39.99,
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      description: "A comfortable premium hoodie for everyday style.",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600"
    },
    {
      id: 17,
      name: "Casual Blue Shirt",
      price: 35.99,
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      description: "A stylish blue shirt for casual occasions.",
      image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600"
    },
    {
      id: 18,
      name: "Classic Black Sneakers",
      price: 59.99,
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      description: "Modern sneakers with a comfortable fit.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
    },
    {
      id: 19,
      name: "Men's Casual Jacket",
      price: 69.99,
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      description: "A modern jacket for a smart casual look.",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"
    },
    {
      id: 20,
      name: "Men's White Sneakers",
      price: 54.99,
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      description: "Minimal white sneakers for daily wear.",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600"
    },
    {
      id: 21,
      name: "Women's Elegant Dress",
      price: 64.99,
      category: "Women",
      sizes: ["S", "M", "L", "XL"],
      description: "An elegant dress for special occasions.",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600"
    },
    {
      id: 22,
      name: "Women's Fashion Outfit",
      price: 58.99,
      category: "Women",
      sizes: ["S", "M", "L", "XL"],
      description: "A modern outfit with a stylish design.",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600"
    },
    {
      id: 23,
      name: "Women's Casual Wear",
      price: 42.99,
      category: "Women",
      sizes: ["S", "M", "L", "XL"],
      description: "Comfortable casual clothing for everyday use.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
    },
    {
      id: 24,
      name: "Women's Stylish Top",
      price: 29.99,
      category: "Women",
      sizes: ["S", "M", "L", "XL"],
      description: "A fashionable top for everyday styling.",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600"
    },
    {
      id: 25,
      name: "Women's Fashion Collection",
      price: 74.99,
      category: "Women",
      sizes: ["S", "M", "L", "XL"],
      description: "A beautiful outfit for a modern wardrobe.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600"
    },
    {
      id: 26,
      name: "Kids Winter Jacket",
      price: 34.99,
      category: "Kids",
      sizes: ["S", "M", "L", "XL"],
      description: "A warm and comfortable jacket for kids.",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600"
    },
    {
      id: 27,
      name: "Kids Casual Outfit",
      price: 27.99,
      category: "Kids",
      sizes: ["S", "M", "L", "XL"],
      description: "A comfortable outfit for everyday activities.",
      image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=600"
    },
    {
      id: 28,
      name: "Kids Stylish Hoodie",
      price: 31.99,
      category: "Kids",
      sizes: ["S", "M", "L", "XL"],
      description: "A soft hoodie for a cool casual look.",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600"
    },
    {
      id: 29,
      name: "Kids Fashion Set",
      price: 36.99,
      category: "Kids",
      sizes: ["S", "M", "L", "XL"],
      description: "A stylish clothing set for kids.",
      image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600"
    },
    {
      id: 30,
      name: "Kids Casual Shoes",
      price: 29.99,
      category: "Kids",
      sizes: ["S", "M", "L", "XL"],
      description: "Comfortable shoes for active kids.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
    },
    {
      id: 31,
      name: "Luxury Handbag",
      price: 89.99,
      category: "Accessories",
      sizes: ["One Size"],
      description: "A premium handbag with an elegant design.",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"
    },
    {
      id: 32,
      name: "Fashion Sunglasses",
      price: 24.99,
      category: "Accessories",
      sizes: ["One Size"],
      description: "Stylish sunglasses for everyday fashion.",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
    },
    {
      id: 33,
      name: "Premium Wrist Watch",
      price: 49.99,
      category: "Accessories",
      sizes: ["One Size"],
      description: "A classic watch for a premium look.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
    },
    {
      id: 34,
      name: "Travel Backpack",
      price: 45.99,
      category: "Accessories",
      sizes: ["One Size"],
      description: "A spacious backpack for travel and daily use.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"
    },
    {
      id: 35,
      name: "Leather Wallet",
      price: 19.99,
      category: "Accessories",
      sizes: ["One Size"],
      description: "A simple and elegant everyday wallet.",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600"
    },
    {
      id: 36,
      name: "Men's Summer T-Shirt",
      price: 25.99,
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      description: "A lightweight T-shirt for summer.",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
    },
    {
      id: 37,
      name: "Men's Formal Shirt",
      price: 44.99,
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      description: "A smart formal shirt for work and events.",
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600"
    },
    {
      id: 38,
      name: "Women's Summer Fashion",
      price: 49.99,
      category: "Women",
      sizes: ["S", "M", "L", "XL"],
      description: "A fresh summer fashion look.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600"
    },
    {
      id: 39,
      name: "Women's Elegant Outfit",
      price: 69.99,
      category: "Women",
      sizes: ["S", "M", "L", "XL"],
      description: "An elegant outfit for your wardrobe.",
      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600"
    },
    {
      id: 40,
      name: "Women's Fashion Style",
      price: 55.99,
      category: "Women",
      sizes: ["S", "M", "L", "XL"],
      description: "A fashionable style for modern women.",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600"
    },
    {
      id: 41,
      name: "Kids Summer Outfit",
      price: 23.99,
      category: "Kids",
      sizes: ["S", "M", "L", "XL"],
      description: "A lightweight outfit for summer days.",
      image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=600"
    },
    {
      id: 42,
      name: "Fashion Shoulder Bag",
      price: 52.99,
      category: "Accessories",
      sizes: ["One Size"],
      description: "A stylish shoulder bag for daily use.",
      image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600"
    },
    {
      id: 43,
      name: "Classic Fashion Cap",
      price: 17.99,
      category: "Accessories",
      sizes: ["One Size"],
      description: "A classic cap to complete your casual outfit.",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600"
    },
    {
      id: 44,
      name: "Men's Casual Outfit",
      price: 62.99,
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      description: "A modern casual outfit for everyday style.",
      image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600"
    },
    {
      id: 45,
      name: "Women's Modern Collection",
      price: 72.99,
      category: "Women",
      sizes: ["S", "M", "L", "XL"],
      description: "A modern fashion look with a stylish finish.",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600"
    }

  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openProductDetails = (product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[0] === "One Size" ? "One Size" : "M");
    setProductQuantity(1);
  };

  const addToCart = (product, size, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, {
        id: product.id,
        name: product.name,
        price: product.price,
        size,
        quantity
      }];
    });
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    addToCart(selectedProduct, selectedSize, productQuantity);
    alert("Product added to cart successfully!");
  };

  const changeQuantity = (id, size, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);
      return exists
        ? prevWishlist.filter((item) => item.id !== product.id)
        : [...prevWishlist, product];
    });
  };

  const addWishlistProductToCart = (product) => {
    const size = product.sizes[0] === "One Size" ? "One Size" : "M";
    addToCart(product, size, 1);
    alert("Product added to cart!");
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const closePanels = () => {
    setShowCart(false);
    setShowWishlist(false);
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <div>
      <nav className="navbar">
        <h2>StyleAura</h2>

        <div className="nav-links">
          <a href="#" onClick={() => { setSelectedCategory("All"); setSelectedProduct(null); }}>Home</a>
          <a href="#products" onClick={() => { setSelectedCategory("All"); setSelectedProduct(null); }}>Shop</a>
          <a href="#products" onClick={() => { setSelectedCategory("Men"); setSelectedProduct(null); }}>Men</a>
          <a href="#products" onClick={() => { setSelectedCategory("Women"); setSelectedProduct(null); }}>Women</a>
          <a href="#products" onClick={() => { setSelectedCategory("Kids"); setSelectedProduct(null); }}>Kids</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-icons">
          <button onClick={() => { closePanels(); setShowLogin(true); }}>Login / Signup</button>
          <button onClick={() => { setShowCart(!showCart); setShowWishlist(false); }}>Cart ({totalItems})</button>
          <button onClick={() => { setShowWishlist(!showWishlist); setShowCart(false); }}>Wishlist ({wishlist.length})</button>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setSelectedProduct(null); }}
          />
        </div>
      </nav>

      {showLogin && (
        <section className="login-form">
          <h2>Welcome to StyleAura</h2>
          <p>Login to your account</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            alert("Login successful! Demo only.");
            setShowLogin(false);
          }}>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
          <p>Don't have an account?</p>
          <button onClick={() => { setShowLogin(false); setShowSignup(true); }}>Create New Account</button>
          <button onClick={() => setShowLogin(false)}>Close</button>
        </section>
      )}

      {showSignup && (
        <section className="login-form">
          <h2>Create Your Account</h2>
          <p>Join StyleAura today!</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            alert("Account created! Demo only.");
            setShowSignup(false);
          }}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Create Password" required />
            <button type="submit">Create Account</button>
          </form>
          <button onClick={() => setShowSignup(false)}>Close</button>
        </section>
      )}

      {showWishlist && (
        <section className="cart-panel">
          <h2>My Wishlist</h2>
          {wishlist.length === 0 ? (
            <p>Your Wishlist is empty.</p>
          ) : (
            wishlist.map((product) => (
              <div className="cart-item" key={product.id}>
                <div>
                  <h3>{product.name}</h3>
                  <p>${product.price.toFixed(2)}</p>
                </div>
                <button onClick={() => addWishlistProductToCart(product)}>Add to Cart</button>
                <button onClick={() => toggleWishlist(product)}>Remove</button>
              </div>
            ))
          )}
          <button onClick={() => setShowWishlist(false)}>Close Wishlist</button>
        </section>
      )}

      {showCart && (
        <section className="cart-panel">
          <h2>Your Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.size}`} className="cart-item">
                <div>
                  <h3>{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <div>
                  <button onClick={() => changeQuantity(item.id, item.size, -1)}>-</button>
                  <span> {item.quantity} </span>
                  <button onClick={() => changeQuantity(item.id, item.size, 1)}>+</button>
                </div>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))
          )}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={() => { setShowCheckout(true); setShowCart(false); }} disabled={cart.length === 0}>
            Proceed to Checkout
          </button>
          <button onClick={() => setShowCart(false)}>Close Cart</button>
        </section>
      )}

      {showCheckout && (
        <section className="checkout">
          <h2>Checkout</h2>
          <p>Complete your order details</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            setLastOrderTotal(totalPrice);
            setOrderPlaced(true);
            setCart([]);
            setShowCheckout(false);
          }}>
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Mobile Number" required />
            <textarea placeholder="Complete Delivery Address" required />
            <h3>Order Summary</h3>
            {cart.map((item) => (
              <p key={`${item.id}-${item.size}`}>
                {item.name} | Size: {item.size} | Qty: {item.quantity}
              </p>
            ))}
            <h3>Payment Method</h3>
            <p>Cash on Delivery (COD)</p>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button type="submit">Place Order</button>
            <button type="button" onClick={() => setShowCheckout(false)}>Back to Shopping</button>
          </form>
        </section>
      )}

      {orderPlaced && (
        <section className="order-success">
          <h1>Thank You!</h1>
          <h2>Your Order Has Been Placed.</h2>
          <p>Thank you for shopping with StyleAura.</p>
          <h3>Order Total: ${lastOrderTotal.toFixed(2)}</h3>
          <button onClick={() => { setOrderPlaced(false); setShowCheckout(false); }}>
            Continue Shopping
          </button>
        </section>
      )}

      <section className="hero">
        <div className="hero-content">
          <p>NEW COLLECTION 2026</p>
          <h1>Style That<br />Defines You.</h1>
          <p>Discover modern fashion and express your personality with StyleAura.</p>
          <button onClick={() => {
            setSelectedCategory("All");
            setSelectedProduct(null);
            document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
          }}>
            SHOP NOW
          </button>
        </div>
      </section>

      <section className="categories">
        <h2>Explore Collections</h2>
        <p>Find your perfect style</p>
        <div className="category-list">
          {["Men", "Women", "Kids", "Accessories"].map((category) => (
            <div key={category} onClick={() => {
              setSelectedCategory(category);
              setSelectedProduct(null);
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
            }}>
              {category === "Men" && "Men's Fashion"}
              {category === "Women" && "Women's Fashion"}
              {category === "Kids" && "Kids Collection"}
              {category === "Accessories" && "Accessories"}
            </div>
          ))}
        </div>
      </section>

      <section className="products" id="products">
        <h2>Trending Products</h2>
        <p>Discover our latest fashion arrivals</p>

        <div className="category-filters">
          {["All", "Men", "Women", "Kids", "Accessories"].map((category) => (
            <button key={category} onClick={() => {
              setSelectedCategory(category);
              setSelectedProduct(null);
            }}>
              {category === "All" ? "All Products" : category}
            </button>
          ))}
        </div>

        <h3>Showing: {selectedCategory}</h3>

        {selectedProduct && (
          <section className="product-details">
            <button onClick={() => setSelectedProduct(null)}>Back to Products</button>
            <div className="details-content">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <div className="details-info">
                <p>{selectedProduct.category} Collection</p>
                <h2>{selectedProduct.name}</h2>
                <h3>${selectedProduct.price.toFixed(2)}</h3>
                <p>{selectedProduct.description}</p>

                <h3>Select Size</h3>
                <div className="size-options">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      className={selectedSize === size ? "selected-size" : ""}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <h3>Quantity</h3>
                <div className="quantity-selector">
                  <button onClick={() => setProductQuantity((q) => Math.max(1, q - 1))}>-</button>
                  <span>{productQuantity}</span>
                  <button onClick={() => setProductQuantity((q) => q + 1)}>+</button>
                </div>

                <h3>Subtotal: ${(selectedProduct.price * productQuantity).toFixed(2)}</h3>
                <button onClick={handleAddToCart}>Add to Cart</button>
                <button onClick={() => toggleWishlist(selectedProduct)}>
                  {wishlist.some((item) => item.id === selectedProduct.id)
                    ? "Remove from Wishlist"
                    : "Add to Wishlist"}
                </button>
              </div>
            </div>
          </section>
        )}

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  onClick={() => openProductDetails(product)}
                  style={{ cursor: "pointer" }}
                />
                <h3 onClick={() => openProductDetails(product)} style={{ cursor: "pointer" }}>
                  {product.name}
                </h3>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => openProductDetails(product)}>Select Size / Add to Cart</button>
                <button onClick={() => toggleWishlist(product)}>
                  {wishlist.some((item) => item.id === product.id)
                    ? "Remove Favourite"
                    : "Add to Wishlist"}
                </button>
                <button onClick={() => openProductDetails(product)}>View Details</button>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </section>

      <footer id="contact">
        <h2>StyleAura</h2>
        <p>Fashion for Every Moment.</p>
        <p>Contact: support@styleaura.com</p>
        <p>© 2026 StyleAura. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
