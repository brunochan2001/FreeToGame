import { fireEvent, render, screen } from '@testing-library/react';
import CustomSelect from '../CustomSelect';

describe('CustomSelect render test', () => {
  const onChange = jest.fn();

  test('should not show the submenu if you don`t hover on the label', () => {
    render(
      <CustomSelect value="" label="Gender" options={[]} onChange={onChange} />
    );

    expect(screen.queryByTestId('list-options')).not.toBeInTheDocument();
  });

  test('should show the submenu if you hover on the label', () => {
    render(
      <CustomSelect value="" label="Gender" options={[]} onChange={onChange} />
    );
    const inputElement: HTMLElement = screen.getByTestId('show-list');
    fireEvent.mouseEnter(inputElement);

    expect(screen.getByTestId('list-options')).toBeInTheDocument();
  });
});
