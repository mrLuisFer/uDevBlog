import { useEffect, useState } from 'react';
import ApiNewsCard from './ApiNewsCard/ApiNewsCard';

export default function GetApiNew() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDetail, setShowDetail] = useState(false);

  const gettingInfo = async () => {
    const res = await fetch(
      'https://google-search3.p.rapidapi.com/api/v1/search/q=programacion&num=100',
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

  const handleShowDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div>
      {loading ? (
        <div className='loader__height'>
          <div className='loader'>Loading...</div>
        </div>
      ) : (
        <div className='GetApiNews'>
          <div
            className='GetApiNews__detailContainer'
            onClick={handleShowDetail}
          >
            <h3 className='GetApiNews__detailContainer-title'>
              <i
                className='fas fa-caret-right'
                id={showDetail ? 'rotate' : ''}
              ></i>
              More details
            </h3>
            {showDetail ? (
              <p className='GetApiNews__detailContainer-text'>
                Esta es una api que podiamos utilizar para mostrar noticias
                acerca del mundo de la programacion o cualquier tema :D
                <span>
                  <i className='fas fa-rocket'></i>Powered by RapidApi
                </span>
              </p>
            ) : (
              ''
            )}
          </div>
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
