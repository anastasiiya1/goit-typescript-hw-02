import { useState } from "react";
import toast from "react-hot-toast";
import styles from './SearchBar.module.css'

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  function handleSubmitInput(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }

    onSubmit(query);
    setQuery("");
  }

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleSubmitInput}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
    </header>
  );
}

export default SearchBar;