import { useEffect, useState } from 'react';
import ApiNewsCard from './ApiNewsCard/ApiNewsCard';
import ApiNewsDetail from './ApiNewsDetail/ApiNewsDetail';

export default function GetApiNew() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const gettingInfo = async () => {
    const res = await fetch(
      `https://google-search3.p.rapidapi.com/api/v1/search/q=frontend&num=100`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            '144b367500msh9505c34fd031f85p12f461jsnd58cc4f6a0f8',
          'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        },
      },
    );

    const data = await res.json();

    setApiData(data.results);
    setLoading(false);
  };

  useEffect(() => {
    gettingInfo();
  }, []);

  console.log(apiData);

  return (
    <div>
      {loading ? (
        <div className='loader__height'>
          <div className='loader'>Loading...</div>
        </div>
      ) : (
        <div className='GetApiNews'>
          <ApiNewsDetail />
          <div className='GetApiNews__flex'>
            {apiData.map((news, i) => (
              <ApiNewsCard
                key={i}
                title={news.title}
                description={news.description}
                link={news.link}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
