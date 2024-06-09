// Admin.jsx
import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const storedArticles = localStorage.getItem('articles');
    if (storedArticles) {
      setArticles(JSON.parse(storedArticles));
    }
  }, []);

  // Maqolani o'chirish funksiyasi
  const handleDeleteArticle = (id) => {
    const updatedArticles = articles.filter(article => article.id !== id); // id ga mos kelmaydigan maqolalarni saqlash
    setArticles(updatedArticles);
    localStorage.setItem('articles', JSON.stringify(updatedArticles)); // Yangi ro'yxatni localStorage ga saqlaymiz
  };

  const handleAddArticle = () => {
    if (!title || !content || !imageURL) {
      alert("Ma'lumotlarni to'liq kiriting!");
      return;
    }
    const newArticle = { id: Date.now(), title, content, imageURL }; // Yangi maqolaga id beramiz
    const updatedArticles = [...articles, newArticle];
    setArticles(updatedArticles);
    localStorage.setItem('articles', JSON.stringify(updatedArticles));
    setTitle('');
    setContent('');
    setImageURL('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setImageURL(imageURL);
  };

  return (
    <div className='pt-[300px] text-[red]'>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Maqola sarlavhasi"
        required
      />
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Maqola mazmuni"
        required
      />
      <input type="file" onChange={handleImageChange} required />

      <button onClick={handleAddArticle}>Maqola Qo'shish</button>

      {/* Maqolalar ro'yxati */}
      {articles.map((article, index) => (
        <div key={article.id}>
          <img src={article.imageURL} alt={article.title} />
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <button onClick={() => handleDeleteArticle(article.id)} className='bg-red-300 text-[red]'>O'chirish</button>
        </div>
      ))}
    </div>
  );
};

export default Admin;
