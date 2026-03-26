const useUpload = ({ file, setFile, setPlayList, setLoading }) => {
  const handleUpload = async () => {
    try {
      if (!file) {
        alert("please provide music name");
        return;
      }

      setLoading(true);

      const formData = new FormData();

      formData.append("audio", file);
      const VITE_URL = import.meta.env.VITE_URL;

      const res = await fetch(VITE_URL, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      const { id, url } = data;

      if (!res.ok) {
        console.log(res.status);
        return;
      }

      setPlayList((playList) => [...playList, { id, url }]);
      setFile(null);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return { handleUpload };
};

export default useUpload;
