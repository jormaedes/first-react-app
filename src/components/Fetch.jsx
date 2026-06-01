import { useEffect, useState } from "react";

const Image = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
    .then((response) => {
		if (response.status >= 400)
			throw Error('server error')
		return response.json()
	})
    .then((response) => setImageURL(response[0].download_url))
    .catch((error) => setError(error))
	.finally(()=> setLoading(false));
  }, []);

  if (loading) return <p>loading...</p>
  if (error) return <p>A network error was encountered</p>

  return (
    imageURL && (
      <>
        <h1>An image</h1>
        <img src={imageURL} alt={"placeholder text"} />
      </>
    )
  );
};

export default Image;
