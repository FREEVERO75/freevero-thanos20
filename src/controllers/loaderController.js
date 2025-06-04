let showLoaderFn = () => {};
let hideLoaderFn = () => {};

export const setLoaderFunctions = (showFn, hideFn) => {
  showLoaderFn = showFn;
  hideLoaderFn = hideFn;
};

export const showLoader = () => showLoaderFn();
export const hideLoader = () => hideLoaderFn();
