import { checkAuth, logout } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');

// use checkAuth function to redirect if user not authenticated

window.addEventListener('load', async () => {
    checkAuth();
});

// add event listener to the logout button and call logout
logoutButton.addEventListener('click', async () => {
    logout();
});

// log out button