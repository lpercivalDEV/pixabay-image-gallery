import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl text-center mx-auto mt-6 text-purple-600">
        Pixabay Image Gallery
      </h1>
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">
          No Images Found :({" "}
        </h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">LOADING</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <a href={image.pageURL}>
              <ImageCard key={image.id} image={image} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
