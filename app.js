function exec() {
  squares();
}

function squares() {
  var numIn = parseInt(document.getElementById('in').value);
  if (numIn == NaN) {
    document.getElementById('out').value += 'fine elaborazione';
  } else {
    for (var i = 1; i <= numIn; i++) {
      document.getElementById('out').value += i * i + '\n';
    }
    document.getElementById('out').value += 'fine elaborazione';
  }
}
