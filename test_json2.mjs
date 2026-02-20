import axios from 'axios';

async function fetchJson() {
    try {
        console.log("Downloading TCK JSON...");
        const response = await axios.get('https://raw.githubusercontent.com/yigityuce/Turkish-Law-DB/master/TCK.json');
        console.log("Success! Keys:", Object.keys(response.data));
    } catch (error) {
        console.log("Error:", error.message);
    }
}
fetchJson();
