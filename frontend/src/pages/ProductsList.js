import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <h2>Lista de Produtos</h2>
      {products.length === 0 ? <p>Nenhum produto encontrado</p> : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>R$ {product.price}</p>
              <img src={product.imageUrl} alt={product.name} style={{ width: '100px' }} />
              <button onClick={() => handleDelete(product.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductsList;
