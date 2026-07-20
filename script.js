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

    const horizontalCm = Number(document.getElementById("horizontalGauge").value);
    const verticalCm = Number(document.getElementById("verticalGauge").value);

    // ==============================
    // VALIDATION
    // ==============================

    if (
    isNaN(chestWidth) ||
    isNaN(jacketLength) ||
    isNaN(horizontalCm) ||
    isNaN(verticalCm) ||

    chestWidth <= 0 ||
    jacketLength <= 0 ||
    horizontalCm <= 0 ||
    verticalCm <= 0
) {
    alert("Please complete all required fields.");
    return;
}

    // ==============================
    // GAUGE
    // ==============================

    // 7 stitches = ? cm
    const stitchGauge = 7 / horizontalCm;

    // 17 rows = ? cm
    const rowGauge = 17 / verticalCm;

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
    // DISPLAY RESULT
    // ==============================

    document.getElementById("foundationChain").textContent =
        foundationChain + " sts";

    document.getElementById("backRows").textContent =
        totalRows + " rows";

}