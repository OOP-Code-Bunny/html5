(function(){
    var status,date;
    var serverUrl = 'socket.php';
    window.onload = function(){
        status = document.getElementById('zt');
        date = document.getElementById('date');
        connect();
    };
    function connect() {
        status.innerHTML = '正在创立连接';
        var es = new EventSource(serverUrl);
        es.onopen = openCallback;
        es.onerror = errorCallback;
        es.onmessage = messageCallback;
    }
    function openCallback(e) {
        status.innerHTML = '已连接'
    }
    function errorCallback(e) {
        status.innerHTML = '连接错误'
    }
    function messageCallback(e) {
        date.innerHTML = e.data
    }
})();
