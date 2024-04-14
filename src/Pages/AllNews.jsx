import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const AllNews = () => {
  const [data1, setData1] = useState(null);
  const [loading1, setLoading1] = useState(true);
  const [error1, setError1] = useState(null);

  const [data2, setData2] = useState(null);
  const [loading2, setLoading2] = useState(true);
  const [error2, setError2] = useState(null);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_41882ca5fb26c454fa5a747a326978fcad07a&q=News&country=uz&language=uz');
        setData1(response.data);
      } catch (error) {
        setError1(error.message);
      } finally {
        setLoading1(false);
      }
    };

    const fetchData2 = async () => {
      try {
        const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_418841c77edc10ecf41743254c97af5cc17b4&country=ru&category=business ');
        setData2(response.data);
      } catch (error) {
        setError2(error.message);
      } finally {
        setLoading2(false);
      }
    };

    fetchData1();
    fetchData2();
  }, []);

  if (loading1 || loading2) {
    return <p>Loading...</p>;
  }

  if (error1 || error2) {
    return <p>Error: {error1 || error2}</p>;
  }

  return (
    <div className='container pt-[100px]'>
      <div className='flex flex-row flex-wrap justify-around'>
        <div className='flex flex-col flex-wrap'>
          <h2 className="text-[#fff] text-2xl font-semibold mb-4">News from Uzbekistan</h2>
          {data1 && data1.results && data1.results.map(article => (
            <div key={article.article_id} className='md:w-[600px]'>
              <NavLink to={`/article/${article.article_id}`} className='mx-4 my-4'>
                <div className="md:flex md:items-center md:justify-between flex-wrap md:gap-[70px]">
                  <img src={article.image_url} alt={article.title} className='w-[300px] h-[250px] object-cover rounded-[10px]' />
                  <p className='text-[#fff] md:max-w-[330px] text-[22px]'>{article.title}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <div className='flex flex-col flex-wrap'>
          <h2 className="text-[#fff] text-2xl font-semibold mb-4">News from Russia</h2>
          {data2 && data2.results && data2.results.map(article => (
            <div key={article.article_id} className='md:w-[700px]'>
              <NavLink to={`/article/${article.article_id}`} className='mx-4 my-4'>
                <div className="md:flex md:items-center md:justify-between flex-wrap md:gap-[70px]">
                  <img src={article.image_url} alt={article.title} className='w-[300px] h-[250px] object-cover rounded-[10px]' />
                  <p className='text-[#fff] md:max-w-[330px] text-[22px]'>{article.title}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllNews;
