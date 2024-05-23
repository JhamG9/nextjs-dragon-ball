"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/tools/api";
import { Character } from "@/interfaces/Character.interface";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const data = await fetchData("characters");
    setCharacters(data.items);
    console.log(data.items);
  };

  return (
    <>
      <h1 className="text-white text-center">Characters</h1>
      <section className="row bg-dark my-4">
        {characters.map((character: Character) => (
            <div className="col-4 my-4" key={character.id}>
              <div className="card bg-dark text-white text-center">
                <img src={character.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
        ))}
      </section>
    </>
  );
}
