// Utility Functions

function capitalizeWords(input) {
    if (!input) return "";
    return input.replace(/\b\w/g, (char) => char.toUpperCase());
}

function filterActiveUsers(users) {
    if (!Array.isArray(users)) return [];
    return users.filter((user) => user.isActive === true);
}

function logAction(action, username) {
    const timestamp = new Date().toISOString();
    return `User ${username} performed ${action} at ${timestamp}`;
}

module.exports = {
    capitalizeWords,
    filterActiveUsers,
    logAction,
};