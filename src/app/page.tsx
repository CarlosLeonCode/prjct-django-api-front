"use client";

import { useState } from "react";
import CardComponent from "./ui/components/card_component";
import SearchFieldComponent from "./ui/components/search_field_component";
import { fetchMovieByName } from "../services/movieService";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

export default function Home() {
  const [movie, setMovie] = useState(null);
  const [movieName, setMovieName] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const response = await fetchMovieByName(movieName);
    setMovie(response);
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setMovieName(event.target.value);

  return (
    <main className="min-h-screen flex justify-center items-center flex-col bg-slate-500 gap-6">
      <div>
        <SearchFieldComponent
          handleSubmit={handleSubmit}
          handleOnChange={handleInputChange}
          fieldValue={movieName}
          buttonSubmitCaption={"Search Movie"}
          fieldPlaceholder={"Type a movie title..."}
        />
      </div>

      <div className="w-1/3">
        <CardComponent title="Movie Details as JSON">
          {movie && <JsonView src={movie} />}
        </CardComponent>
      </div>
    </main>
  );
}
