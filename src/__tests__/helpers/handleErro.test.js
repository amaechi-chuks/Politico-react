import handleErrorMessage from '../../helpers/handleErrorMessage.js';

const objErr = [
  {
    email: 'email err',
  },
];
describe('Error messages', () => {
  it('shows error: string', () => {
    expect(handleErrorMessage('this is an err')).toEqual('this is an err');
  });

  it('shows error: object', () => {
    expect(handleErrorMessage(objErr)).toEqual('email err');
  });
});
