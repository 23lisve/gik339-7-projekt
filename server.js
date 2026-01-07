// Hjälpare för id-generering (använd den i Uppgift3)
function nextId() {
  const n = tasks.length + 1;
  return String(n).padStart(3, '0');
}

