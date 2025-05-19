import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const numPizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => {
            return <Pizza pizzaOb={pizza} />;
          })}
        </ul>
      )}
    </main>
  );
}

function Pizza({ pizzaOb }) {
  return (
    <li className={`pizza ${pizzaOb.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaOb.photoName} alt={pizzaOb.name} />
      <div>
        <h3>{pizzaOb.name}</h3>
        <p>{pizzaOb.ingredients}</p>
        <span>{pizzaOb.soldOut ? "SOLD OUT" : pizzaOb.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = currentHour > openHour && currentHour < closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order hours={{ openHour, closeHour }} />
      ) : (
        <p>
          You're welcome between {openHour}:00AM to {closeHour}:00PM.
        </p>
      )}
    </footer>
  );
}

function Order({ hours }) {
  return (
    <div className="order">
      <p>
        We're open from {hours.openHour}:00 to {hours.closeHour}:00. Come visit
        us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
