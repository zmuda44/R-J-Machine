export const getUser = () => {
  return fetch('/api/admin', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createUser = async (e) => {
  return
  e.preventDefault();
  try {
    const response = await fetch('/api/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:
      
    })
  }

}