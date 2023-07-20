import axios from "axios";
import { DiaryEntry, NewDiaryEntry } from "../types";

const baseUrl = "https://flight-diary-app.fly.dev/api/diaries";

export const getAllEntries = () => {
  return axios
    .get<Array<DiaryEntry>>(baseUrl)
    .then((response) => response.data);
};

export const createEntry = (object: NewDiaryEntry) => {
  return axios
    .post<DiaryEntry>(baseUrl, object)
    .then((response) => response.data);
};
