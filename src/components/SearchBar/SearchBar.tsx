import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';

interface Props {
  value: string;
  onChange: (e: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="search">
      <SearchIcon />
      <input
        className="search-input"
        placeholder="Searching games"
        value={value}
        data-testid="search"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
