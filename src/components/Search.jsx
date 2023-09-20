const Search = ({ handleSearch, searchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search by tag..."
      className="bg-gray-300 p-2 border border-gray-300 min-w-[200px] max-w-[500px] w-1/2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900 focus:border-transparent"
      onChange={handleSearch}
      value={searchQuery}
    />
  );
};

export default Search;
