import React, { useEffect, useState } from "react";
import { hpPhotoAPI } from "../../api/photoApi";
import type { Character } from "../../types/HPCharacter";

interface ModalProps {
  character: Character | null;
  onClose: () => void;
}

const CharacterModal: React.FC<ModalProps> = ({ character, onClose }) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (!character) return;
    const loadImage = async () => {
      let img = hpPhotoAPI.cache.get(character.name) || null;
      if (!img && character.actor) img = await hpPhotoAPI.getActorPhoto(character.actor);
      if (!img) img = hpPhotoAPI.createGreyCircle(character.name);
      setImage(img);
    };
    loadImage();
  }, [character]);

  if (!character) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="cross" onClick={onClose}>✖</button>
        {image && <img src={image} alt={character.name} />}
        <h2>{character.name}</h2>
        <p>Date of birth: {character.dateOfBirth || "Unknown"}</p>
        <p>Patronus: {character.patronus || "Unknown"}</p>
        <div>
          Wand:
          {character.wand && (character.wand.wood || character.wand.core || character.wand.length) ? (
            <div>
              <div>Wood: {character.wand.wood || "Unknown"}</div>
              <div>Core: {character.wand.core || "Unknown"}</div>
              <div>Length: {character.wand.length || "Unknown"}</div>
            </div>
          ) : (
            <div>No wand information</div>
          )}
        </div>
        <div>
          Alternate names: {character.alternate_names?.length ? character.alternate_names.join(", ") : "No alternate names"}
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
