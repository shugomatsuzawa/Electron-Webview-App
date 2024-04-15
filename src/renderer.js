window.onload = function () {
  document.getElementById("backBtn").onclick = function () {
    window.electronAPI.setNavigate('BACK');
  };
  document.getElementById("forwardBtn").onclick = function () {
    window.electronAPI.setNavigate('FORWARD');
  };
  document.getElementById("reloadBtn").onclick = function () {
    window.electronAPI.setNavigate('RELOAD');
  };
};
