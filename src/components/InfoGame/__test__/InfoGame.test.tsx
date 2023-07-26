import { render, screen } from '@testing-library/react';
import InfoGame from '../InfoGame';
import { game } from './mockData';

describe('InfoGame render test', () => {
  const returnFunction = jest.fn();

  test('should show the game information', () => {
    render(<InfoGame activeGame={game} onClick={returnFunction} />);
    const title = screen.getByTestId('title');
    const description = screen.getByTestId('description');
    const additionalTitle = screen.getByTestId('additional-title');
    const additionalDeveloper = screen.getByTestId('additional-developer');
    const additionalPublisher = screen.getByTestId('additional-publisher');
    const additionalRelease = screen.getByTestId('additional-releaseDate');
    const additionalGenre = screen.getByTestId('additional-genre');
    const additionalPlatform = screen.getByTestId('additional-platform');
    const requirementsGraphics = screen.getByTestId('requirements-graphics');
    const requirementMemory = screen.getByTestId('requirements-memory');
    const requirementsOs = screen.getByTestId('requirements-os');
    const requirementsProcessor = screen.getByTestId('requirements-processor');
    const requirementsStorage = screen.getByTestId('requirements-storage');

    expect(title.innerHTML).toBe(game.title);
    expect(description.innerHTML).toBe(game.description);
    expect(additionalTitle.innerHTML).toBe(game.title);
    expect(additionalDeveloper.innerHTML).toBe(game.developer);
    expect(additionalPublisher.innerHTML).toBe(game.publisher);
    expect(additionalRelease.innerHTML).toBe(game.release_date);
    expect(additionalGenre.innerHTML).toBe(game.genre);
    expect(additionalPlatform.innerHTML).toBe(game.platform);
    expect(requirementsOs.innerHTML).toBe(game.minimum_system_requirements.os);
    expect(requirementsGraphics.innerHTML).toBe(
      game.minimum_system_requirements.graphics
    );
    expect(requirementMemory.innerHTML).toBe(
      game.minimum_system_requirements.memory
    );
    expect(requirementsProcessor.innerHTML).toBe(
      game.minimum_system_requirements.processor
    );
    expect(requirementsStorage.innerHTML).toBe(
      game.minimum_system_requirements.storage
    );
  });
});
