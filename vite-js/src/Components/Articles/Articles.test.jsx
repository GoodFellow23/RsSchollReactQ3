import {Articles} from "./Articles";
import {render, screen} from '@testing-library/react';
const searchResult = [
    {
        title: "dima",
        author: "dima1",
        publishedAt: "dima2",
        description: "dima3",
    }
]
test('loads and displays greeting', async () => {
    render(<Articles searchResult={searchResult}/>)

    expect(screen.getByText('Load Greeting')).toBeInTheDocument()
})
