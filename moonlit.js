// ==============================
// Moonlit Pages Pattern Calculator
// ==============================

const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", calculatePattern);

function calculatePattern() {

    // ==============================
    // GET INPUT
    // ==============================

    const chestWidth = Number(document.getElementById("chestWidth").value);
    const jacketLength = Number(document.getElementById("jacketLength").value);
    const sleeveLength = Number(document.getElementById("sleeveLength").value);
    const armhole = Number(document.getElementById("armhole").value);
    const neckWidth = Number(document.getElementById("neckWidth").value);

    const horizontalCm = Number(document.getElementById("horizontalGauge").value);
    const verticalCm = Number(document.getElementById("verticalGauge").value);

    // ==============================
    // VALIDATION
    // ==============================

    if (

    isNaN(chestWidth) ||
    isNaN(jacketLength) ||
    isNaN(sleeveLength) ||
    isNaN(armhole) ||
    isNaN(neckWidth) ||
    isNaN(horizontalCm) ||
    isNaN(verticalCm) ||

    chestWidth <= 0 ||
    jacketLength <= 0 ||
    sleeveLength <= 0 ||
    armhole <= 0 ||
    neckWidth <= 0 ||
    horizontalCm <= 0 ||
    verticalCm <= 0

) {
    alert("Please complete all required fields.");
    return;
}

    // ==============================
    // GAUGE
    // ==============================

    // 17 stitches = ? cm
const stitchGauge = 17 / horizontalCm;

// 7 rows = ? cm
const rowGauge = 7 / verticalCm;

    // ==============================
    // FOUNDATION CHAIN
    // ==============================

    let foundationChain = chestWidth * stitchGauge;

    // Round UP to nearest multiple of 4
    foundationChain = Math.ceil(foundationChain / 4) * 4;

    // +3 stitches
    foundationChain += 3;

    // ==============================
    // BACK PANEL ROWS
    // ==============================

    let totalRows = (jacketLength - 6) * rowGauge;

    // Round UP to nearest even number
    totalRows = Math.ceil(totalRows / 2) * 2;

   // ==============================
// FRONT PANEL
// ==============================

// Foundation Chain
let frontFoundation =
    ((chestWidth / 2) - 3) * stitchGauge;

frontFoundation = Math.ceil(frontFoundation);
frontFoundation = Math.ceil(frontFoundation / 4) * 4;
frontFoundation += 3;

// Neck Width
let frontNeckWidth =
    neckWidth * stitchGauge;

// Round UP to whole stitch
frontNeckWidth = Math.ceil(frontNeckWidth);

// ==============================
// Decreased Rows
// ==============================

let frontDecreasedRows =
    armhole * rowGauge;

// Round UP ke ganjil
frontDecreasedRows = Math.ceil(frontDecreasedRows);

if (frontDecreasedRows % 2 === 0) {
    frontDecreasedRows++;
}

// Safety check
if (frontDecreasedRows >= totalRows) {
    frontDecreasedRows = totalRows - 1;
}

// Tetap harus ganjil
if (frontDecreasedRows % 2 === 0) {
    frontDecreasedRows--;
}

// ==============================
// Normal Rows
// ==============================

let frontNormalRows =
    totalRows - frontDecreasedRows;

// Karena totalRows selalu genap,
// normalRows otomatis ganjil jika
// decreasedRows ganjil.

// Safety
if (frontNormalRows < 1) {
    frontNormalRows = 1;
    frontDecreasedRows = totalRows - 1;
}

// ==============================
// COLLAR
// ==============================

// Side Hem
let sideHem = 3 * rowGauge;

// Round UP to nearest even number
sideHem = Math.ceil(sideHem / 2) * 2;

// Collar Width
let collarWidth =
    ((chestWidth / 2) - 3) * rowGauge;

// Round UP to nearest even number
collarWidth = Math.ceil(collarWidth / 2) * 2;

// ==============================
// SLEEVE
// ==============================

// Sleeve Rows
let sleeveRows =
    (sleeveLength - 3) * rowGauge;

// Round UP ke angka ganjil
sleeveRows = Math.ceil(sleeveRows);

if (sleeveRows % 2 === 0) {
    sleeveRows++;
}

    // ==============================
    // DISPLAY RESULT
    // ==============================

    document.getElementById("foundationChain").textContent =
        foundationChain + " sts";

    document.getElementById("backRows").textContent =
        totalRows + " rows";

    document.getElementById("frontFoundationResult").textContent =
    frontFoundation + " sts";

    document.getElementById("frontNormalRowsResult").textContent =
    frontNormalRows + " rows";

    document.getElementById("frontDecreasedRowsResult").textContent =
    frontDecreasedRows + " rows";

    document.getElementById("sideHemResult").textContent =
    sideHem + " rows";

    document.getElementById("collarWidthResult").textContent =
    collarWidth + " rows";

    document.getElementById("frontNeckWidthResult").textContent =
    frontNeckWidth + " sts";
    
    document.getElementById("sleeveRowsResult").textContent =
    sleeveRows + " rows";

}