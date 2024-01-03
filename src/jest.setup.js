// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom';

jest.mock('contentful', ()=> (
    {
        createClient: jest.fn().mockReturnValue({
            getEntries: jest.fn().mockReturnValue({
                items: [],
            }),
        })
    }
))