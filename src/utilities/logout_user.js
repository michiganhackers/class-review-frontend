export default function logoutUser(onLogout) {
    localStorage.setItem("wolverinerank-current-page", window.location);
    localStorage.removeItem("wolverinerank-refresh-token");
    onLogout();
    window.location = localStorage.getItem("wolverinerank-current-page");
}