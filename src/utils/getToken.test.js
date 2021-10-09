import { getToken } from './getToken';

describe('getToken', () => {
  it('retrieves a token from an api', async () => {
    const token = jest.fn(getToken()).mockImplementationOnce(() => Promise.resolve({access_token: '123'}));
    const response = await token()
    expect(response.access_token).toEqual('123')
  })
})