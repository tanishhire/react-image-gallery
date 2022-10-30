import React from 'react'

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',')
    return (
        <div className="grid justify-center px-6 rounded overflow-hidden shadow-lg">
        <img src= {image.webformatURL} alt="" class="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div class="px-6 py-4">
          {tags.map((index, tag) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 mt-2  text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
          ))}
          
        </div>
      
  
        </div>
    )
  }

  export default ImageCard;


//   absolute flex-col md:flex-row items-center px-6 max-w-sm rounded overflow-hidden shadow-lg