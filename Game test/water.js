let genamount = 0, genprice = 15, genbaseprice = 15, credit = 0, cps = 0;

let wmainloop = () => {wupdate(), wdraw()}; 
setInterval(wmainloop, 16);

let wupdate = () => {
    clickW.onclick = function() {credit = credit + 1};
    generatorW.onclick = function() {
    if (credit >= genprice) {
        credit = credit - genprice;
        genamount = genamount + 1;
        cps = cps + 1;
        genprice = genbaseprice * (Math.pow(1.15, genamount));
        };
    };
    credit = credit + (cps/60);
};

let wdraw = () => {
    creditPerSecondW.value = cps.toFixed(0);
    water.value = credit.toFixed(0);
    generatorW.value = genprice.toFixed(0);
    generatorWamount.value = genamount.toFixed(0);
};

