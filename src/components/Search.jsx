const Search = ({ handleSearch, searchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search by tag..."
      className="mb-4 p-2 border border-gray-300 w-4/5 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent"
      onChange={handleSearch}
      value={searchQuery}
    />
  );
};

export default Search;
