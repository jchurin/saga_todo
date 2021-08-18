import { SS_PREFIX } from "./constants";

export const setSessionStorageItem = (key, value) => {
  sessionStorage.setItem(`${SS_PREFIX}${key}`, JSON.stringify(value));
}

export const getSessionStorageItem = (key) => {
  return JSON.parse(sessionStorage.getItem(`${SS_PREFIX}${key}`)) || {};
}