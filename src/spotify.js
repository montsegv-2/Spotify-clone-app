//https://developer.spotify.com/

export const authEndpoint = 'htpps://acounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = 'd72e39aca2a64d129cacfae943d27c44';

const scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read", 
    "user-modify-playback-state"
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        // #accessToken=mysupersecretkey&name=montse
        let parts = item.split('=');
        initial[parts[0]] = decoreURIComponent(parts[1])

        return initial
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join(
    "%20"
)}&response_type=token&show_dialog=true`;