import { render, screen } from "@testing-library/react"
import { postCardPropsMock } from "./mock"
import { PostCard } from "./PostCard"

const props = postCardPropsMock;

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...props} />);

        expect(screen.getByRole('img', { name: /title 1/i })).toBeInTheDocument();
    })
})