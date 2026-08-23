import { useEffect, useRef, useState } from "react";

const InfiniteScrollOptimized = () => {
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const [imagesData, setImagesData] = useState([]);
  const observerRef = useRef();
  const sentinelRef = useRef();

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${pageNo}&limit=5`,
    );
    const data = await response.json();

    setImagesData((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    if (loading) return;

    observerRef.current = new IntersectionObserver(
      (enteries) => {
        if (enteries[0].isIntersecting) {
          setPageNo((pageNo) => pageNo + 1);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      },
    );

    const sentinelCurrent = sentinelRef.current;

    if (sentinelCurrent) observerRef.current.observe(sentinelCurrent);

    return () => {
      if (sentinelCurrent) observerRef.current.unobserve(sentinelCurrent);
    };
  }, [loading]);

  return (
    <div>
      {imagesData.map((image) => (
        <img
          key={image.id}
          className="h-52 w-52 p-2"
          src={image.download_url}
        />
      ))}

      <div ref={sentinelRef} className="h-0.5"></div>

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScrollOptimized;
