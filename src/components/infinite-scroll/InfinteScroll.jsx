import { useCallback, useEffect, useState, useRef } from "react";

const InfiniteScroll = () => {
  const [pageNo, setPageNo] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight;

    if (windowHeight + scrollPosition >= totalHeight - 50 && !loading) {
      setPageNo((pageNo) => pageNo + 1);
    }
  }, []);

  // use of [] - React creates the function once (on mount) and reuses that exact same function reference for the lifetime of the component — it's never recreated on re-renders.

  // this is to check the usecase of useCallback hook, it is used to memoize the function, so what useCallback does is it does not
  // create an instance of the function on every render rather it take the same refernce it only takes the new reference if the dependency changes
  //   const previousHandler = useRef();

  //   console.log("same function?", previousHandler.current === handleScroll);

  //   previousHandler.current = handleScroll;

  const fetchImages = async () => {
    setLoading(true);
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${pageNo}&limit=5`,
    );
    const data = await response.json();
    console.log(data);
    setImages((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, [pageNo]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <div>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.download_url}
          className="w-100 h-100 p-2"
        />
      ))}

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
