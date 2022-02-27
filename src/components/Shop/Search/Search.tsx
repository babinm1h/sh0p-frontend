import React from 'react';
import "./Search.scss"


const Search = () => {
    const [query, setQuery] = React.useState<string>("")

    const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }


    return (
        <div className="search">
            <input type="text" className="search__input" placeholder="Поиск товаров..."
                value={query} onChange={handleChangeQuery} />
        </div>
    );
};

export default Search;