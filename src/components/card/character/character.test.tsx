/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@libs/utils/test-utils";
import CharacterCard from "./character.components";

describe("Card Character", () => {
  test("render successfully", () => {
    const { container } = render(
      <CharacterCard name="venusaur" imgURL="/icon-pokemon-ball.svg" />
    );
    expect(container).not.toBeEmptyDOMElement();
  });

  test("render as Pokemon List Item", () => {
    const { getByTestId, queryByTestId } = render(
      <CharacterCard
        name="venusaur"
        imgURL="/icon-pokemon-ball.svg"
        catches="10"
      />
    );

    const pokemoneName = getByTestId("name");
    const pokemonBall = getByTestId("pokemon-ball");
    const catchesCount = getByTestId("catches-count");
    const nickname = queryByTestId("nickname");

    expect(pokemonBall).toBeInTheDocument();
    expect(pokemoneName.textContent).toEqual("venusaur");
    expect(catchesCount.textContent).toEqual("10 Catches");
    expect(nickname).toBeFalsy();
  });

  test("render as My Pokemon List Item", () => {
    const { getByTestId, queryByTestId } = render(
      <CharacterCard
        name="Mansur"
        imgURL="/icon-pokemon-ball.svg"
        nickName="venusaur"
      />
    );

    const pokemoneName = getByTestId("name");
    const pokemonBall = queryByTestId("pokemon-ball");
    const catchesCount = queryByTestId("catches-count");
    const nickname = getByTestId("nickname");

    expect(pokemoneName.textContent).toEqual("Mansur");
    expect(nickname.textContent).toEqual("venusaur");
    expect(pokemonBall).toBeFalsy();
    expect(catchesCount).toBeFalsy();
  });
});
