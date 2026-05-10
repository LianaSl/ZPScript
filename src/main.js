import './style.css'

const API_URL = "https://pixabay.com/api"
const KEY_API = "55790798-f52520810e523ed63afe7ae87"
const lang = "cs"
const inputValue = "kytice";
fetch(`${API_URL}?key=${KEY_API}&q=${kytice}&lang=${lang}`);

const res = await fetch(`${API_URL}?key=${KEY_API}&q=${kytice}&lang=${lang}`);
