export const GET_USER = 'getUser';
export const SET_USER = 'setUser';
export const DELETE_USER = 'deleteUser';
export const SET_ERROR = 'setError';

export const GET_CHATS = 'getChats';
export const ADD_CHAT = 'addChat';
export const SET_CHAT_ID = 'setChatId';

export const setUser = (user: any) => ({
  type: SET_USER,
  payload: user,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const setError = (error: { reason: string }) => ({
  type: SET_ERROR,
  payload: error,
});

export const getUser = (user: any) => ({
  type: GET_USER,
  payload: user,
});

export const addChat = (id) => ({
  type: ADD_CHAT,
  payload: id,
});

export const getChats = (chats) => ({
  type: GET_CHATS,
  payload: chats,
});

export const setChatId = (id) => ({
  type: SET_CHAT_ID,
  payload: id,
});
