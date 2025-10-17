import SearchCard from "./SearchCard";

function SearchList({ queryData }) {
  return queryData.map((result) => {
    return (
      <SearchCard
        key={result.id}
        name={result.name}
        image={result.image}
        id={result.id}
      />
    );
  });
}

export default SearchList;
