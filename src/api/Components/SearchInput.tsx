import React from "react";


type props = {
query: string;
setQuery: (value: string) => void;
};

const SearchInput = ({query, setQuery} : props) => {




  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md">
      <label
        htmlFor="search"
        className="sr-only mb-2.5 block text-sm font-medium"
      >
        Search
      </label>
      <div className="flex items-center justify-start gap-5">
     
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          placeholder="Search..."
          className="w-full rounded-md border border-black bg-gray-400 p-3 text-sm outline-none focus:border-transparent focus:ring-2 focus:ring-blue-800"
        />
        {/* <button
          type="button"
          className="rounded-sm bg-blue-600 px-4 py-2 text-white hover:bg-blue-800 focus:bg-blue-800"
        >
          Search
        </button> */}
      </div>
    </form>
  );
};

export default SearchInput;
