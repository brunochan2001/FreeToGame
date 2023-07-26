import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar render test', () => {
  const onChange = jest.fn();

  test('should make the change of value when writing to the input', () => {
    render(<SearchBar value="" onChange={onChange} />);
    const inputElement: HTMLInputElement = screen.getByTestId('search');

    expect(inputElement).toHaveValue('');
  });

  test('should make the change of value when writing to the input', () => {
    render(<SearchBar value="" onChange={onChange} />);
    const inputElement: HTMLInputElement = screen.getByTestId('search');
    fireEvent.change(inputElement, { target: { value: 'overwatch' } });

    expect(onChange).toHaveBeenCalledWith('overwatch');
  });
});
