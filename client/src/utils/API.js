export const getUser = () => {
  return fetch('/admin', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};