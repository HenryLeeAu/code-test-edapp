import { fetchMovieListByGenre, getList, fetchMovieList } from 'actions';
import moxios from 'moxios';
import { baseApi } from 'apis';

describe('Action ', () => {
  let dispatch;
  const resData = [
    {
      descripition:
        'IMF Agent Ethan Hunt is sent to Sydney, to find and destroy a genetically modified disease called ',
      director: 'John Woo',
      genres: ['Action', 'Adventure', 'Thriller'],
      id: 48,
      poster:
        'https://m.media-amazon.com/images/M/MV5BN2RkYWVkZDQtNTMxMi00NWQ4LWE2ODctNmQzOWM2NjQzYzdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg',
      title: 'Mission: Impossible II',
      year: '2000',
    },
  ];
  beforeEach(() => {
    dispatch = jest.fn();
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('fetch Genre', async done => {
    moxios.stubRequest(
      `${baseApi}movies?genres_like=Action&_sort=id&_order=desc`,
      {
        status: 200,
        response: [...resData],
      }
    );
    await fetchMovieListByGenre('Action')(dispatch);
    moxios.wait(() => {
      expect(dispatch).toBeCalledWith(getList(resData));
      done();
    });
  });
  it('fetch movies with keyword', async done => {
    moxios.stubRequest(
      `${baseApi}movies?title_like=Mission&_sort=id&_order=desc`,
      {
        status: 200,
        response: [...resData],
      }
    );
    await fetchMovieList('Mission')(dispatch);
    moxios.wait(() => {
      expect(dispatch).toBeCalledWith(getList(resData));
      done();
    });
  });

  it('fetch movies without keyword', async done => {
    moxios.stubRequest(`${baseApi}movies?_sort=id&_order=desc`, {
      status: 200,
      response: [...resData],
    });
    await fetchMovieList()(dispatch);
    moxios.wait(() => {
      expect(dispatch).toBeCalledWith(getList(resData));
      done();
    });
  });
});
