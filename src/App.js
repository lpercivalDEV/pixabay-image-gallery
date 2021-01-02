import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&order=popular&editors_choice=true&per_page=60`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto md:pl-12">
      <h1 className="font-serif text-6xl text-center mx-auto mt-6 text-yellow-600">
        📷 Pixabay Image Gallery 📷
      </h1>
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="font-serif text-5xl text-center mx-auto mt-32">
          No Images Found :({" "}
        </h1>
      )}

      {isLoading ? (
        <h1 className="font-serif text-6xl text-center mx-auto mt-32">
          LOADING
        </h1>
      ) : (
        <div className="grid grid-cols-3 gap-10">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
