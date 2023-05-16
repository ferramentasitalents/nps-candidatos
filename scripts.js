function calculateNPS() {
  const promotores = parseFloat(document.getElementById("promotores").value);
  const difamadores = parseFloat(document.getElementById("difamadores").value);
  const nps = promotores - difamadores;
  document.getElementById("result").innerHTML = `NPS de Candidatos: ${nps.toFixed(2)}%`;
}
