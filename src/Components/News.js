import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

  let {apiKey, country, category, pageSize} = props;

  const [articles, setArticles] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const handleUpperCase = (word) =>{
    let lower = word.toLowerCase();
    let upper = lower.charAt(0).toUpperCase() + word.slice(1);
    return upper;
  }

  // const url = `https://newsapi.org/v2/top-headlines?sources=google-news-incountry=us&apiKey=427eabb4cd264fc7b22a2b4959bee928&page=${page}&pageSize=3`;

  // https://newsapi.org/v2/top-headlines?country=us&apiKey=427eabb4cd264fc7b22a2b4959bee928

  const fetchNews = async() => {
    props.setprogressBar(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setprogressBar(30);
    let parsedData = await data.json();
    console.log(parsedData);
    props.setprogressBar(75);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false)
    props.setprogressBar(100);
  }

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  }, [])

  const fetchMoreNews = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }


  

  return (
    <>

      <h2 className='text-center mt-3'>TaazaKhabar - {handleUpperCase(category)}</h2>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchMoreNews}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
          <div className='container'>
            <div className='row'>
          {articles.map((element)=>{
          return <div className='col-md-4' key={element.url}> 
                <NewsItem title = {element.title} sourceName = {element.source.name} author = {element.author} description = {element.description} url = {element.url} urlToImage = {element.urlToImage} publishedAt = {element.publishedAt}/> 
              </div>
          })}
            </div>
          </div>
      </InfiniteScroll>

    </>
  )
}

export default News