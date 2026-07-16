const useDelete = ({ playList, setPlayList }) => {
  const handleDelete = async (id) => {
    try {
      const VITE_URL = import.meta.env.VITE_URL;
      const res = await fetch(`${VITE_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        console.log("unable to delete");
        return;
      }

      const updatedList = playList.filter((melody) => melody._id !== id);
      setPlayList(updatedList);
    } catch (error) {
      console.log(error);
    }
  };

  return { handleDelete };
};

export default useDelete;
