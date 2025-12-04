import React, { useEffect, useState } from "react";
import { hpPhotoAPI } from "../../api/photoApi";
import type { Character } from "../../types/HPCharacter";

interface CardProps {
  character: Character;
  onClick: (char: Character) => void;
  getHouseClass: (house?: string) => string;
}

const CharacterCard: React.FC<CardProps> = ({ character, onClick, getHouseClass }) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (!character) return;
    const loadImage = async () => {
      let img = await hpPhotoAPI.getCharacterPhoto(character.name);
      if (!img && character.actor) img = await hpPhotoAPI.getActorPhoto(character.actor);
      if (!img) img = hpPhotoAPI.createGreyCircle(character.name);
      setImage(img);
    };
    loadImage();
  }, [character]);

  if (!character) return null;

  return (
    <div
      className={`grid_content ${getHouseClass(character.house)}`}
      onClick={() => onClick(character)}
      style={{ cursor: 'pointer' }}
    >
      <div className="grid_img-container">
        {image && <img src={image} alt={character.name} className="grid_img" />}
      </div>
      <div className="grid_divider"></div>
      <p className="grid_name">{character.name}</p>
      <p className="grid_house">{character.house || "Unknown"}</p>
      <p className="grid_actor">{character.actor || "Unknown actor"}</p>
    </div>
  );
};

export default CharacterCard;
