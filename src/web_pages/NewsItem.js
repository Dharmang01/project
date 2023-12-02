import React from 'react';

// NewsItem component to display individual news items
const NewsItem = ({ title, description, url, urlToImage }) => {
    return (
        <div className='col-lg-4 col-md-3 col-sm-6 mt-4'>
            {/* Container for each news item */}
            <div className="news-app shadow h-100 position-relative">
                <div className='news-item'>
                    {/* Display news image */}
                    <img className='news-img img-fluid' src={urlToImage} alt={urlToImage} />
                    <div className='p-3'>
                        {/* Display news title */}
                        <h4><a href={url}>{title}</a></h4>
                        {/* Display news description */}
                        <p>{description}</p>
                    </div>
                </div>
                {/* Link to read more */}
                <a href={url} className='position-absolute bottom-0 end-0 btn btn-info'>Read more</a>
            </div>
        </div>
    );
}

export default NewsItem;
