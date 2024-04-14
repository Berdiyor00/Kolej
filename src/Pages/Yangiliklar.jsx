import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_3759981b2c813ee49cd564e7f5b3c867dfe87&q=kun.uz');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
  
      <div className="flex items-start justify-between flex-wrap gap-[30px]">

    <div className='flex  flex-col  flex-wrap'>
      {data && data.results && data.results.map(article => (
        <div key={article.article_id} className='md:w-[700px]'>
          <NavLink to={`/article/${article.article_id}`} className='mx-4 my-4'>
            <div className="md:flex md:items-center md:justify-between flex-wrap md:gap-[70px]">
            <img src={article.image_url} alt={article.title} className='w-[300px] h-[250px] object-cover rounded-[10px]' />
            <p className='text-[#fff] md:max-w-[330px]  text-[22px]'>{article.title.slice(0, 300)}</p>
            </div>
           
          </NavLink>
        </div>
      ))}
    
    </div>
    <div className="flex-col flex-wrap   ">

    <div className="div">
      <h1 className='text-[50px] text-center text-[#FFF]'>
     Ko'p O'qiladigan
      </h1>
      <div className="md:w-[500px] h-[600px] bg-white">
      </div>
    </div>
    <div className="div">
      <h1 className='text-[50px] text-center text-[#FFF]'>
      Ruknlar
      </h1>
      <div className=" md:w-[500px] h-[600px] bg-white">
      </div>
    </div>
    <div className="div">
      <h1 className='text-[50px] text-center text-[#FFF]'>
       E'lonlar
      </h1>
      <div className="md:w-[500px] h-[600px] bg-white">

      </div>
    </div>
      </div>
    </div>

 
  );
};

export default YourComponent;
