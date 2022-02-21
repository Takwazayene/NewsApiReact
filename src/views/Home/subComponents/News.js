import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNews } from '../../../APIs/news';
import isoDateConverter from '../../../helper/isoDateConverter';
import { Modal } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import { newsActions } from '../../../actions/news';
import SearchNews from './searchNews';
import SearchByCountry from './searchByCountry';
import SearchByLanguage from './SearchByLanguage';


import '../_style.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';


export default function News() {
  const [newsData, setNewsData] = useState([]);
  const [newsDetailsData, setNewsDetailsData] = useState(null);
  const [show, setShow] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalResults, setTotalResults] = useState(null);
  const [loading, setLoading] = useState(true);

  const [pageSize] = useState(10);
  const [searchKeyword, setSearchKeyword] = useState('actualités');
  const dispatch = useDispatch();
  const user = localStorage.getItem('user');
  const parseUser = JSON.parse(user);


  const apiKey = 'd04b4b00bc314bef8ed54f05c0ffc01b'; 

  function handleDetailsShow(breakpoint) {
    if (breakpoint) {
      setShow(true);
      setNewsDetailsData(breakpoint);
    }
  }



  const getMore = async () => { 
    
    setPageNumber(pageNumber+1)

    setLoading(true);

    const response = await axios.get(`https://newsapi.org/v2/everything?q=actualités&page=${pageNumber}&pageSize=${pageSize}&apiKey=${apiKey}` )

   // setNewsData(response.data.articles)
   console.log(response)

    setNewsData((articles) => [...articles, ...response.data.articles]);
    setLoading(false);

  //  setArticles(response.data.articles)
    console.log(response)
}


  function handleAddNews(news) {
    if (news) {
      dispatch(newsActions.save({ userid: parseUser.id, ...news }));
    }
  }
  function onSearchSubmit(searchKeyword) {
    setSearchKeyword(searchKeyword);
    setPageNumber(1);

    console.log("searchKeyword",searchKeyword )
    const getArticles = async () => {
      setLoading(true);
  
      const response = await axios.get(`https://newsapi.org/v2/everything?qInTitle=${searchKeyword}&page=${pageNumber}&pageSize=${pageSize}&apiKey=${apiKey}` )
  
      setNewsData(response.data.articles)
      console.log(response.data.articles);
     //setNewsData((prev) => [...prev, ...response.data.articles]);
    //  setLoading(false);
  
    //  setArticles(response.data.articles)
      setLoading(false);
  
  
  }
  
  getArticles()
  }


  function onSearchSubmitByLanguage(searchKeyword) {
    setSearchKeyword(searchKeyword);
    setPageNumber(1);

    console.log("searchKeyword",searchKeyword )
    const getArticles = async () => {
      setLoading(true);
  
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?language=${searchKeyword}&page=${pageNumber}&pageSize=${pageSize}&apiKey=${apiKey}` )
  
      setNewsData(response.data.articles)
      console.log(response.data.articles);
     //setNewsData((prev) => [...prev, ...response.data.articles]);
    //  setLoading(false);
  
    //  setArticles(response.data.articles)
      setLoading(false);
  
  
  }
  
  getArticles()
  }





  function onSearchSubmitByCountry(searchKeyword) {
    setSearchKeyword(searchKeyword);
    setPageNumber(1);

    console.log("searchKeyword",searchKeyword )
    const getArticles = async () => {
      setLoading(true);
  
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${searchKeyword}&page=${pageNumber}&pageSize=${pageSize}&apiKey=${apiKey}` )
  
      setNewsData(response.data.articles)
      console.log(response.data.articles);
     //setNewsData((prev) => [...prev, ...response.data.articles]);
    //  setLoading(false);
  
    //  setArticles(response.data.articles)
      setLoading(false);
  
  
  }
  
  getArticles()
  }







  useEffect(() => {
  //  getNewsData(pageSize, pageNumber, searchKeyword);
  
  const getArticles = async () => {
    setLoading(true);

    const response = await axios.get(`https://newsapi.org/v2/everything?q=actualités&page=${pageNumber}&pageSize=${pageSize}&apiKey=${apiKey}` )

    //setNewsData(response.data.articles)
   setNewsData((prev) => [...prev, ...response.data.articles]);
  //  setLoading(false);

  //  setArticles(response.data.articles)
    setLoading(false);


    console.log(response)
}

getArticles()

  }, []);

  return (
    <>
      <SearchNews onSubmitData={onSearchSubmit} />
      <SearchByCountry onSubmitData={onSearchSubmitByCountry} />
      <SearchByLanguage onSubmitData={onSearchSubmitByLanguage} />


      <div className="row col-md-12   mx-5">
        <h3>Results for: {searchKeyword}</h3>
      </div>


      
    

      <InfiniteScroll
        dataLength={newsData.length}
        next={getMore}
        hasMore={true}
        loader={<h4>loading</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b> You have seen it all</b>
          </p>
        }
        
      >
          <div className="container ">
          <div className="row col-md-12   mx-5 ">

      {newsData?.map((news, index) => (
        <div className="card m-5 "  style={{width: 60+ 'rem'}} key={index}>
          <div className="card-header">
            <div>
              {news.title}
              {parseUser && (
                <a className="add-news" onClick={() => handleAddNews(news)}>
                  Add to my list
                </a>
              )}
            </div>
          </div>
          <div className="card-body">

          <img className="img-thumbnail"  style={{width: 60+ 'rem', height: 20+ 'rem'}} src={news.urlToImage} alt={news.urlToImage}  />
         

            <p className="card-text">{news.description}</p>
            <p className="fw-light">Source : {news?.source.name}</p>

            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-primary" onClick={() => handleDetailsShow(news)}>
                Details
              </button>
            </div>
            </div>

          </div>

      ))}
        </div>
      </div>
           </InfiniteScroll>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Artical Details</Modal.Title>
          <button type="button" className="btn-close" aria-label="Close" onClick={() => setShow(false)} />
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-end artical-published-date">{isoDateConverter(new Date(newsDetailsData?.publishedAt))}</div>
          <b>{newsDetailsData?.title} </b>
          <br />
          <br />
          {newsDetailsData?.content}
          <a href={newsDetailsData?.url} target="_blank" rel="noreferrer">
            see the full artical
          </a>
          <br />
          <div className="d-flex justify-content-end">{newsDetailsData?.author}</div>
        </Modal.Body>
      </Modal>
    


    </>
  );
}
