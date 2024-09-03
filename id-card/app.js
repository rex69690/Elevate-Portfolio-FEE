const LOGO_URL="data:image/png;base64,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";



window.jsPDF= window.jspdf.jsPDF

const doc = new jsPDF({
    orientation: "potrait",
    unit: "in",
    format: [2.125,3.375],
  });
 doc.addImage(LOGO_URI,0.807,0.05,0.51,0.51)
  document.getElementById('idcard-preview')
  .setAttribute('src',URL.createObjectURL(doc.output('blob')));