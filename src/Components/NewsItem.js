import React from 'react'
import favicon from './image.png'

const NewsItem = (props) => {
    let {sourceName, author, title, description, url, urlToImage, publishedAt} = props;
  return (
    <>
        <div className="container py-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col w-100">
                    <div className="card shadow-sm">

                    <div className='d-flex justify-content-end position-absolute ' style={{right : 0}}>
                        <span className="badge rounded-pill bg-danger">{sourceName}</span>
                    </div>

                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={urlToImage ? urlToImage : favicon} alt="newsImage" role="img"></img>
                    <div className="card-body">
                        <span className="card-text fs-4 fw-semibold">{title}</span>
                        <p className="card-text">{description  ? description.slice(0,151) : description }<strong> continue reading...</strong></p>
                        {/* <span className="card-text fs-6 fw-normal mx-3"><strong>{sourceName}</strong></span> */}
                        
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                {/* <a className="btn btn-primary mr-2" href="#" role="button">Link</a> */}
                                <a className="btn btn-sm btn-outline-success" href={url} target="_blank" rel="noreferrer" role="button">Link</a>
                            </div>
                            <div>
                                <span className="card-text mx-2"><strong>By {author ? author : "Unknown"}</strong></span>
                            </div>
                        
                        </div>
                        <div className='d-flex justify-content-end'>
                        <small className="text-muted">{new Date(publishedAt).toGMTString()}</small>

                        </div>
                    </div>
                    </div>
                </div>
    
            </div>
        </div>
    </>
  )
}

export default NewsItem