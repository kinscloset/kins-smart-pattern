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

// Total Decreased Rows
let frontDecreasedRows =
    armhole * rowGauge;

// Round UP to nearest odd number
frontDecreasedRows = Math.ceil(frontDecreasedRows);

if (frontDecreasedRows % 2 === 0) {
    frontDecreasedRows++;
}

// Total Normal Rows
let frontNormalRows =
    totalRows - frontDecreasedRows;

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
}