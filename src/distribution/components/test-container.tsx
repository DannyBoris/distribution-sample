import update from "immutability-helper";
import type { FC } from "react";
import { useCallback, useState } from "react";
import { Track } from "../utils/types";

import { SortableTrack } from "./sortable-track";

const style = {};

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

interface Props {
  tracks: Track[];
}

export const Container = ({ tracks }: Props) => {
  {
    const [cards, setCards] = useState(tracks);

    const moveCard = (dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Track[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        })
      );
    };

    return (
      <>
        <div style={style}>
          {cards.map((card, i) => (
            <SortableTrack
              key={card.id}
              index={i}
              id={card.id}
              text={card.name}
              moveCard={moveCard}
            />
          ))}
        </div>
      </>
    );
  }
};
