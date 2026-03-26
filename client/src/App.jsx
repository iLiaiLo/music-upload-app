import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import useUpload from "./hooks/useUpload";
import Music from "./components/Music";
import useDelete from "./hooks/useDelete";

function App() {
  const [file, setFile] = useState(null);
  const [playList, setPlayList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const VITE_URL = import.meta.env.VITE_URL;
        const res = await fetch(VITE_URL);
        const data = await res.json();
        setPlayList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const { handleUpload } = useUpload({
    file,
    setFile,
    setPlayList,
    setLoading,
  });
  const { handleDelete } = useDelete({ playList, setPlayList });

  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "min(500px,100%)",
        }}
      >
        <div>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept="audio/*"
          />
          <button onClick={handleUpload}>Upload Audio</button>
          {loading && <h2>loading</h2>}

          {!loading && playList.length ? (
            <section style={{ marginTop: "20px" }}>
              {playList.map((audio) => {
                return (
                  <Music
                    key={audio.id}
                    handleDelete={handleDelete}
                    id={audio.id}
                    url={audio.url}
                  />
                );
              })}
            </section>
          ) : (
            <h2>no data</h2>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
