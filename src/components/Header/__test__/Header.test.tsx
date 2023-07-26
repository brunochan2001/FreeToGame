import { render } from '@testing-library/react';
import Header from '../Header';

describe('test Header', () => {
  test('should render a Header snapshot', () => {
    const header = render(<Header />);

    expect(header).toMatchSnapshot();
  });
});
