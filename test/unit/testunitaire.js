/**
 * Tests unitaires du projet Collisimo sur les tarifs
 * 
 */
MesTestsUnitaires = TestCase('TarifsTest');
MesTestsUnitaires.prototype.testsTarif1 = function () {
    assertEquals('50g ', 4.95, recupTarif(0));
    assertEquals('100g', 4.95, recupTarif(100));
    assertEquals('200g', 4.95, recupTarif(200));
};

MesTestsUnitaires.prototype.testsTarif2 = function () {
    assertEquals('300g ', 6.70, recupTarif(300));
    assertEquals('400g', 6.70, recupTarif(400));
    assertEquals('500g', 6.70, recupTarif(500));
};

MesTestsUnitaires.prototype.testsTarif3 = function () {
    assertEquals('600g ', 7.60, recupTarif(600));
    assertEquals('700g', 7.60, recupTarif(700));
    assertEquals('750g', 7.60, recupTarif(750));
};

MesTestsUnitaires.prototype.testsTarif4 = function () {
    assertEquals('760g ', 8.25, recupTarif(760));
    assertEquals('800g', 8.25, recupTarif(800));
    assertEquals('1000g', 8.25, recupTarif(1000));
};

MesTestsUnitaires.prototype.testsTarif5 = function () {
    assertEquals('1200g ', 9.55, recupTarif(1200));
    assertEquals('1500g', 9.55, recupTarif(1500));
    assertEquals('2000g', 9.55, recupTarif(2000));
};

MesTestsUnitaires.prototype.testsTarif6 = function () {
    assertEquals('2200g ', 14.65, recupTarif(2200));
    assertEquals('3100g', 14.65, recupTarif(3100));
    assertEquals('5000g', 14.65, recupTarif(5000));
};

MesTestsUnitaires.prototype.testsTarif7 = function () {
    assertEquals('5600g ', 21.30, recupTarif(5600));
    assertEquals('7000g', 21.30, recupTarif(7000));
    assertEquals('10 000g', 21.30, recupTarif(10000));
};

MesTestsUnitaires.prototype.testsTarif8 = function () {
    assertEquals('12 000g ', 26.95, recupTarif(12000));
    assertEquals('13 000g', 26.95, recupTarif(13000));
    assertEquals('15 000g', 26.95, recupTarif(15000));
};

MesTestsUnitaires.prototype.testsTarif9 = function () {
    assertEquals('17 000g ', 33.40, recupTarif(17000));
    assertEquals('20 000g', 33.40, recupTarif(20000));
    assertEquals('25 000g', 33.40, recupTarif(25000));
};

MesTestsUnitaires.prototype.testsTarif10 = function () {
    assertEquals('30 000g ', 33.40, recupTarif(30000));
};

MesTestsUnitaires.prototype.testsTarif11 = function () {
    assertEquals('33 000g ', null, recupTarif(33000));
    assertEquals('44 000g ', null, recupTarif(44000));
    assertEquals('50 000g ', null, recupTarif(50000));

};


