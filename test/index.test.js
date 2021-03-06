import 'miniprogram-simulate';
import {
  storage,
  Storage,
  getCookie,
  setCookie,
  getCookieStr,
  setCookieJar,
  getCookieJar,
  clearCookie,
  authorize,
  request,
  middlewares,
} from '../src/index';

describe('index', () => {
  test('the interfaces are right', () => {
    expect(storage).not.toBeUndefined();
    expect(storage instanceof Storage).toBeTruthy();

    expect(Storage).not.toBeUndefined();

    expect(getCookie).not.toBeUndefined();
    expect(typeof getCookie === 'function').toBeTruthy();

    expect(setCookie).not.toBeUndefined();
    expect(typeof setCookie === 'function').toBeTruthy();

    expect(getCookieStr).not.toBeUndefined();
    expect(typeof getCookieStr === 'function').toBeTruthy();

    expect(setCookieJar).not.toBeUndefined();
    expect(typeof setCookieJar === 'function').toBeTruthy();

    expect(getCookieJar).not.toBeUndefined();
    expect(typeof getCookieJar === 'function').toBeTruthy();

    expect(clearCookie).not.toBeUndefined();
    expect(typeof clearCookie === 'function').toBeTruthy();

    expect(authorize).not.toBeUndefined();
    expect(typeof authorize === 'function').toBeTruthy();

    expect(request).not.toBeUndefined();
    expect(typeof request === 'function').toBeTruthy();

    expect(middlewares).not.toBeUndefined();
    expect(middlewares instanceof Array).toBeTruthy();
  });
});
