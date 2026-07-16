import { useState, useRef, useEffect } from "react";
import "./App.css";
import useUpload from "./hooks/useUpload";
import Music from "./components/Music";
import useDelete from "./hooks/useDelete";

const VITE_URL = import.meta.env.VITE_URL;
function App() {
  const [file, setFile] = useState(null);
  const fileRef = useRef(null);
  const [playList, setPlayList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
    fileRef,
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
            ref={fileRef}
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
                    key={audio._id}
                    handleDelete={handleDelete}
                    id={audio._id}
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
