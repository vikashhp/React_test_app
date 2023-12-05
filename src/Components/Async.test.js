import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async code',()=>{

    test('async code test',async ()=>{
        window.fetch=jest.fn();
        window.fetch.mockResolvedValueOnce({
            json:async ()=>[{id:'p1',title:'First post'}]
        })
        render(<Async/>);

        const listItemsElement=await screen.findAllByRole('listitem');
        expect(listItemsElement).not.toHaveLength(0);
    })

})