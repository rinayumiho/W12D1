import { Route } from "react-router-dom";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";
import React from "react";

export const App = () => (
    <Route path="/" component={PokemonIndexContainer} />
) 