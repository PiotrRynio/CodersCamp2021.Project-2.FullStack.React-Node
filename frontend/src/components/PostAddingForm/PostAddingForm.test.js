// import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import PostAddingForm from './PostAddingForm';
import { render, screen } from 'test-utils';

describe('PostAddingForm', () => {
  it('Should properly render form before data is received', async () => {
    render(<PostAddingForm />);

    const loadingStatus = screen.getByText(/Loading/i);
    expect(loadingStatus).toBeInTheDocument();
  });
  /* it('Should properly render form after data is received', async () => {
    render(
      <Providers>
        <PostAddingForm />{' '}
      </Providers>,
    );

    const loadingStatus = screen.getByText(/Loading/i);
    await waitForElementToBeRemoved(() => loadingStatus);
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
    const formTitle = screen.getByText(/Add New Announcement/i);
    expect(formTitle).toBeInTheDocument();
  });*/
});
