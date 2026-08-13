function updateDateTime() {
    const current = new Date();
    document.getElementById('datetime').textContent = current.toLocaleString();
    document.getElementById('datetime2').textContent = current.toLocaleString();
}
updateDateTime();
setInterval(updateDateTime, 1000);