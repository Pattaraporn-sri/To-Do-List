import { useState } from "react";
import "./App.css";
import List from './Components/List'
import Form from "./Components/Form";

type Nametype = {
  id: number;
  name: string;
};

function App() {
  const [name, setName] = useState<string>("");
  const [artist, setArtists] = useState<Nametype[]>([]);

  const handleAdd = (name: string) => {
    const new_artist: Nametype = {
      id: Date.now(),
      name: name,
    };
    setArtists([...artist,new_artist]);
    setName("");
  };
  const Delete = (id: number) => {
    setArtists(artist.filter((artists) => artists.id !== id));
  };
  const saveEdit = (name: string ,id:number) => { 
    setArtists(
      artist.map((artists) =>
        artists.id === id ? { ...artists, name: name} : artists
      )
    );
  };

  return (
    <>
    <nav>
      <h1 className="todolist">  To Do List  </h1>
    </nav>
    <div className="app-background">
      <div>
      <Form handleAdd={handleAdd} />
        
        <p className="app-post-list">  Post List  </p>
          {artist.map((item) => (
            <List id={item.id} name={item.name}Delete={Delete} saveEdit={saveEdit} key={item.id}/>
          ))
          .reverse()}
      </div>
      </div>
    </>
  )
}



export default App;
