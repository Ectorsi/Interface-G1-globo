import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

import HomeTemplate from '../../components/Templates/Home';

const Home: React.FC = () => {
  const [news, setNews] = useState([]);
  const [moreNews, setMoreNews] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get('http://localhost:3001/feed/page/1')
      .then((response) => setNews(response.data));
  }, []);

  const loadNewPage = useCallback(() => {
    setCurrentPage(currentPage + 1);

    axios
      .get(`http://localhost:3001/feed/page/${currentPage + 1}`)
      .then((response) => setMoreNews(response.data));
  }, [currentPage]);

  return (
    <HomeTemplate loadNewPage={loadNewPage} news={[...news, ...moreNews]} />
  );
};

export default Home;
