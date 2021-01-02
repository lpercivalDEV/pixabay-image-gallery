import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <div className="max-w-sm max-h-96 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-2 bg-white opacity-80">
          <div className="font-bold text-red-700 text-md">
            Photo by {image.user}
          </div>
        </div>
        <a className="max-w-xs" href={image.pageURL}>
          <img
            src={image.webformatURL}
            alt=""
            className="w-full opacity-100 hover:filter-saturation-70 "
          />
        </a>
      </div>
      <div className="max-w-sm px-6 py-2 bg-white opacity-60">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-smibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
