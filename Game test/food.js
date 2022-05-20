let fgenamount = 0, fgenprice = 15, fgenbaseprice = 15, fcredit = 0, fcps = 0;

let fmainloop = () => {update(), draw()}; 
setInterval(fmainloop, 16);

let update = () => {
    clickF.onclick = function() {fcredit = fcredit + 1};
    generatorF.onclick = function() {
    if (fcredit >= fgenprice) {
        fcredit = fcredit - fgenprice;
        fgenamount = fgenamount + 1;
        fcps = fcps + 1;
        fgenprice = fgenbaseprice * (Math.pow(1.15, fgenamount));
        };
    };
    fcredit = fcredit + (fcps/60);
};

let draw = () => {
    creditPerSecondF.value = fcps.toFixed(0);
    food.value = fcredit.toFixed(0);
    generatorF.value = fgenprice.toFixed(0);
    generatorFamount.value = fgenamount.toFixed(0);
};

