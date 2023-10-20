import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../Redux/RecipeReducer/action";
import { Button, Input, SimpleGrid } from '@chakra-ui/react';
import RecepeCard from "./RecepeCard";

function RecipeSearch() {
  // const [query, setQuery] = useState("pasta");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const recipes = useSelector((store) => store.recipeReducer.recipes.results);
  console.log(recipes);

  // const handleSearch = (e) => {
  //   setPage(1); // Reset the page to 1 when a new search is performed.
  //   dispatch(getRecipe(1, query));
  // };
  

  useEffect(() => {
    dispatch(getRecipe(page, query));
  }, [page, query]);

  return (
    <div>
      <div>
        <Input
          type="text"
          value={query}
          placeholder="Search Recipe here....."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <br/>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} spacing={4}>
        {recipes?.map((el) => (
          <RecepeCard key={el.id} {...el} />
        ))}
      </SimpleGrid>
      <br/>
       <div>
       <Button onClick={()=>setPage(page-1)} disabled={page == 1}>PREV</Button>
       <Button>{page}</Button>
       <Button onClick={()=>setPage(page+1)}>NEXT</Button>
       </div>
    </div>
  );
}

export default RecipeSearch;
