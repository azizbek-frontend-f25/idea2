import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [dataUrl, setDataUrl] = useState([]);
  const [homeImg, setHomeImg] = useState([])
  const [special,setSpecial] = useState([])
  const [catalog,setCatalog] = useState(false)
  const [catalog2,setCatalog2] = useState(false)
  const url = "https://66534fd1813d78e6d6d7ea8a.mockapi.io/carousel";
  const url2 = "https://66534fd1813d78e6d6d7ea8a.mockapi.io/carousel2";
  const url3 = "https://ef875a22e6079508.mokky.dev/special"

  const deleteItem = (id) => {
    axios.delete(`${url}/${id}`);
  };

  useEffect(() => {
    axios.get(url).then((result) => setDataUrl(result.data));
    axios.get(url2).then((res) => setHomeImg(res.data));
    axios.get(url3).then((res2) => setSpecial(res2.data));
  }, []);
  

  return <UserContext.Provider value={{catalog2,setCatalog2,catalog,setCatalog,special,setSpecial,dataUrl,deleteItem,setDataUrl,url,url2,url3,homeImg,setHomeImg}}>{children}</UserContext.Provider>;
};

export default UserProvider;
