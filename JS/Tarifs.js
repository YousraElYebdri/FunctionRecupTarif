function recupTarif (poids){
    const poid1 = 251;
    const poid2 = 501;
    const poid3 = 751;
    const poid4 = 1001;
    const poid5 = 2001;
    const poid6 = 5001;
    const poid7 = 10001;
    const poid8 = 15001;
    const poid9 = 30001;
    
    const tarif1 = 0;
    const tarif2 = 4.95;
    const tarif3 = 6.70;
    const tarif4 = 7.60;
    const tarif5 = 8.25;
    const tarif6 = 9.55;
    const tarif7 = 14.65;
    const tarif8 = 21.30;
    const tarif9 = 26.95;
    const tarif10 = 33.40;

    let Tarif = 0;
    
    if (poids <= poid1){
        Tarif = tarif2;
    }else if (poids < poid2){
        Tarif = tarif3;
    }else if (poids < poid3){
        Tarif = tarif4;
    }
        //Tarif = null;
        return Tarif ;
}