import axios, {AxiosInstance} from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {IBackendResponse, SparringRoomDataProps} from 'src/interface';
import {BACKEND_API_URL} from 'src/api';
import {AssessmentDataProps} from 'src/interface';

const NEWSAPI_API_KEY = 'apiKey=2cac7875e9c74047a7cc60556c3a971b';
const SYMPTOM_CHECKER_BASE_URL = 'https://priaid-symptom-checker-v1.p.rapidapi.com/';
const NEWSAPI_BASE_URL = 'http://newsapi.org/v2';

export const getHealthNews = () =>
    new Promise((resolve, reject) => {
        axios({
            method: 'get',
            baseURL: NEWSAPI_BASE_URL,
            url: '/everything',
            params: {
                q: 'health',
                sortBy: 'popularity',
                apiKey: NEWSAPI_API_KEY,
            },
            withCredentials: true,
        })
            .then(({data}) => {
                resolve(data);
            })
            .catch(reject);
    });

export const getDiagnosis = (
    listOfSymptoms,
    gender,
    year_of_birth,
) =>
    new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            baseURL: NEWSAPI_BASE_URL,
            url: '/diagnosis',
            params: {symptoms: listOfSymptoms, gender: gender, year_of_birth: year_of_birth, language: 'en-gb'},
            headers: {
                'x-rapidapi-key': '714c3d6edbmsh2cb94f2adbc24d7p19c74ejsnf5150f35691f',
                'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com'
            },
            withCredentials: true,
        })
            .then(({data}) => {
                resolve(data);
            })
            .catch(reject);
    });

export const getIssueInfo = (
    issue_id
): =>
    new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: 'https://priaid-symptom-checker-v1.p.rapidapi.com/issues/1/info',
            params: {language: 'en-gb'},
            headers: {
                'x-rapidapi-key': '714c3d6edbmsh2cb94f2adbc24d7p19c74ejsnf5150f35691f',
                'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com'
            },
            withCredentials: true,
        })
            .then(({data}) => {
                resolve(data.result);
            })
            .catch(reject);
    });

