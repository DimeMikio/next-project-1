import { render, screen } from '@testing-library/react';
import { Posts } from './Post';

const props = {
    posts: [
        {
            id: 1,
            title: 'title 1',
            body: 'body 1',
            cover: 'img/img1'
        },
        {
            id: 2,
            title: 'title 2',
            body: 'body 2',
            cover: 'img/img2'
        },
        {
            id: 3,
            title: 'title 3',
            body: 'body 3',
            cover: 'img/img3'
        },
    ]
}

describe('<Posts />', () => {
    it('should render posts', () => {
        render(<Posts {...props} />);

        expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
        expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
        expect(screen.getAllByText(/title/i)).toHaveLength(3);
    })
    it('should match snapshot', () => {
        const { container } = render(<Posts {...props} />);

        expect(container.firstChild).toMatchSnapshot()
    })
})