function calculateNPS() {
  const promotores = parseFloat(document.getElementById("promotores").value);
  const denegridores = parseFloat(document.getElementById("denegridores").value);
  const nps = promotores - denegridores;
  document.getElementById("result").innerHTML = `NPS de Candidatos: ${nps.toFixed(2)}%`;
}
