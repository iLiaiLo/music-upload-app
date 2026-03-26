const Music = ({ id, url, handleDelete }) => {
  return (
    <div>
      <audio controls>
        <source src={url} type="audio/mpeg" />
      </audio>
      <button onClick={() => handleDelete(id)}>remove</button>
    </div>
  );
};

export default Music;
