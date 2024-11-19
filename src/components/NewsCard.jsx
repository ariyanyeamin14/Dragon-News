import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    published_date,
    thumbnail_url,
    rating,
    total_view,
    details,
  } = news;

  return (
    <div className=" bg-white rounded-lg shadow-md overflow-hidden">
      {/* Thumbnail Image */}
      <div className="relative">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-96 object-cover object-top"
        />
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
          Trending
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>

        {/* Author Info */}
        <div className="flex items-center mb-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-gray-700">{author.name}</h3>
            <p className="text-xs text-gray-500">{published_date}</p>
          </div>
        </div>

        {/* Rating and Views */}
        <div className="flex items-center justify-between mb-3 text-gray-600">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating.number}</span>
          </div>
          <div className="flex items-center">
            <FaEye className="mr-1" />
            <span className="text-sm">{total_view} views</span>
          </div>
        </div>

        {/* Details */}
        <p className="text-sm text-gray-700 mb-3">
          { details.length > 100 ? `${details.slice(0, 100)}...` : details }
        </p>

        {/* Read More Button */}
        <Link to={`/news/details/${news._id}`} className="text-blue-600 hover:underline text-sm font-medium">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
