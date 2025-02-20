import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../pages/ProductsPage.css';

const ProductsPage = ({ onProductAdded }) => {
  const [product, setProduct] = useState({ name: '', description: '', price: '', imageUrl: '' });
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      alert('Erro ao carregar produtos');
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await axios.put(`http://localhost:5000/api/products/${editingProduct.id}`, product);
        alert('Produto atualizado com sucesso!');
      } else {
        await axios.post('http://localhost:5000/api/products', product);
        alert('Produto adicionado com sucesso!');
      }
      resetForm();
      fetchProducts();
      if (onProductAdded) onProductAdded();
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
      alert('Erro ao salvar produto');
    }
  };

  const handleEdit = (product) => {
    setProduct({ ...product }); // Evita mutação direta
    setEditingProduct(product);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        fetchProducts();
      } catch (error) {
        console.error('Erro ao excluir produto:', error);
        alert('Erro ao excluir produto');
      }
    }
  };

  const resetForm = () => {
    setProduct({ name: '', description: '', price: '', imageUrl: '' });
    setEditingProduct(null);
  };

  return (
    <div className="products-container">
      <h2>{editingProduct ? 'Editar Produto' : 'Adicionar Produto'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome" value={product.name} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Descrição" value={product.description} onChange={handleChange} />
        <input type="number" name="price" placeholder="Preço" value={product.price} onChange={handleChange} required />
        <input type="text" name="imageUrl" placeholder="URL da Imagem" value={product.imageUrl} onChange={handleChange} />
        <button type="submit">{editingProduct ? 'Atualizar Produto' : 'Adicionar Produto'}</button>
        {editingProduct && <button type="button" onClick={resetForm}>Cancelar</button>}
      </form>

      <h2>Lista de Produtos</h2>
      <input type="text" placeholder="Pesquisar produto..." value={search} onChange={(e) => setSearch(e.target.value)} />

      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <div className="products-list">
          {products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())).map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>Preço:</strong> R${product.price}</p>
              <button onClick={() => handleEdit(product)} aria-label="Editar produto">Editar</button>
              <button onClick={() => handleDelete(product.id)} aria-label="Excluir produto">Excluir</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
