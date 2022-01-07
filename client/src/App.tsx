const products = [
  { name: 'Product 1', price: 100.00 },
  { name: 'Product 2', price: 200.00 },
  { name: 'Product 2', price: 200.00 },
];

function App() {
  return (
    <div>
      <h1>ReactSharpStore</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
