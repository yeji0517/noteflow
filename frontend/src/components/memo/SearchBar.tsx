import { Search } from "lucide-react";

function SearchBar(){
    return (
        <div className="relative mt-3">

            <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
            type="text"
            placeholder="메모 검색"
            className="w-full rounded-xl border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500"
            />

        </div>
    );
}

export default SearchBar;