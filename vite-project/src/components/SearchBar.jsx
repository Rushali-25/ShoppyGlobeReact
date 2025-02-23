import { useDispatch } from "react-redux";
import { setSearchQuery } from "../slices/searchSlice";

function SearchBar() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
    />
  );
}

export default SearchBar;
