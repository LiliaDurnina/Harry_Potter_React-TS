import React from 'react';
import CharacterCard from '../components/Character/CharacterCard';
import CharacterModal from '../components/Character/CharacterModal';
import { useCharacters } from '../hooks/useCharacters';
import type { Character } from '../types/HPCharacter';

export const CharactersPage: React.FC = () => {
  const { characters, loading, error, loadMore, openModal, closeModal, modalCharacter, modalPhoto, hasMore } = useCharacters();

  // Функция для получения CSS-класса по дому
  const getHouseClass = (house?: string) => {
    const houseMap: Record<string, string> = {
      Gryffindor: "gryffindor",
      Slytherin: "slytherin",
      Hufflepuff: "hufflepuff",
      Ravenclaw: "ravenclaw",
    };
    return house ? houseMap[house] || "" : "";
  };

  return (
    <div className="character__body">
      {loading && <div id="loading">loading...</div>}
      {error && <div id="error">{error}</div>}

      <section className="section1">
        <h2 id="section1__title">The main characters</h2>
        <div className="character_grid" id="characters-container">
          {characters.map((char: Character) => (
            <CharacterCard
              key={char.name}
              character={char}           // Обязательно character, а не data
              onClick={() => openModal(char)}
              getHouseClass={getHouseClass} // Передаём функцию
            />
          ))}
        </div>

        {hasMore && (
          <div id="load-more-container" style={{ textAlign: 'center', marginTop: 40 }}>
            <button id="load-more-btn" className="load-more-button" onClick={loadMore}>
              Load More Characters
            </button>
          </div>
        )}
      </section>

      <CharacterModal character={modalCharacter} photo={modalPhoto} onClose={closeModal} />
    </div>
  );
};

export default CharactersPage;
