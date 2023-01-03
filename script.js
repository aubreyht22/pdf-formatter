function format() {
  let input = document.getElementById("input");
  let toFormat = input.value;
  let formatted = document.getElementById("formatted").value;
  formatted = toFormat.toLowerCase();
  formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
  formatted = formatted.replace("eaton", "Eaton");
  document.getElementById("formatted").value = formatted;
  document.getElementById("formatted").style.display = "block";
  document.getElementById("copy-button").style.display = "block";
}

function clearAll() {
  document.getElementById('input').value = '';
  document.getElementById('formatted').value = '';
  document.getElementById('formatted').style.display = 'none';
  document.getElementById('copy-button').style.display = 'none';
  document.getElementById('copied').style.display = 'none';
}

function copyResult() {
  let copyText = document.getElementById("formatted");
  navigator.clipboard.writeText(copyText.value);
  let copiedAlert = document.getElementById("copied");
  copiedAlert.style.display = "block";
}

function format2() {
  let textarea2 = document.getElementById("textarea2");
  let toFormat2 = textarea2.value;
  let formatted2 = document.getElementById("formatted2").value;
  formatted2 = toFormat2.replace(/• /g, "");
  formatted2 = formatted2.replace(/(\r\n|\n|\r)/gm, " ");
  formatted2 = formatted2.replace(/\./gm, ". ");
  formatted2 = formatted2.replace(/\s+/g, " ");
  formatted2 = formatted2.replace("eaton", "Eaton");
  document.getElementById("formatted2").value = formatted2.trim();
    document.getElementById("formatted2").style.display = "block";
  document.getElementById("copy-button2").style.display = "block";
}

function clearAll2() {
  document.getElementById('textarea2').value = '';
  document.getElementById('formatted2').value = '';
  document.getElementById('formatted2').style.display = 'none';
  document.getElementById('copy-button2').style.display = 'none';
  document.getElementById('copied2').style.display = 'none';
}

function copyResult2() {
  let copyText2 = document.getElementById("formatted2");
  navigator.clipboard.writeText(copyText2.value);
  let copiedAlert2 = document.getElementById("copied2");
  copiedAlert2.style.display = "block";
}
