import "./App.css";
import Card from "./components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";

const url = "https://randomuser.me/api/";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const { data } = await axios.get(url);
      setUser(data.results[0]);
    } catch (error) {
      alert(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);

      setLoading(true);
    }
  };
  console.log(user);
  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <RingLoader color="#F65A83" />;
  }

  return (
    <div className="appcont">
      <Card user={user} />
      <button className="btn" onClick={() => getUser()}>
        Random User
      </button>
    </div>
  );
}

export default App;
