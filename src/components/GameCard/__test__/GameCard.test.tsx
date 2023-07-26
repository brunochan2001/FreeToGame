import { render, screen, fireEvent } from '@testing-library/react';
import GameCard from '../GameCard';
import { game } from './mockData';

describe('GameCard render test', () => {
  const selectGame = jest.fn(id => id);

  test('should render a game card with title and short description', () => {
    const { getByText } = render(<GameCard game={game} onClick={selectGame} />);

    expect(getByText(game.title)).toBeInTheDocument();
    expect(getByText(game.short_description)).toBeInTheDocument();
  });

  test('should get the game id when you press the button', () => {
    render(<GameCard game={game} onClick={selectGame} />);
    const selectGameBtn = screen.getByRole('button');
    fireEvent.click(selectGameBtn);

    expect(selectGame).toHaveReturnedWith(game.id);
  });
});
