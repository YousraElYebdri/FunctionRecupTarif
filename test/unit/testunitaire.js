/**
 * Tests unitaires du projet Collisimo sur les tarifs
 * 
 */
MesTestsUnitaires = TestCase('TarifsTest');
MesTestsUnitaires.prototype.testsTarif1 = function () {
    assertEquals('50g ', 0, recupTarif(0));
    assertEquals('100g', 0, recupTarif(100));
    assertEquals('200g', 0, recupTarif(200));
};

MesTestsUnitaires = TestCase('TarifsTest');
MesTestsUnitaires.prototype.testsTarif2 = function () {
    assertEquals('250g ', 4.95, recupTarif(0));
    assertEquals('350g', 4.95, recupTarif(350));
    assertEquals('400g', 4.95, recupTarif(400));
};

MesTestsUnitaires = TestCase('TarifsTest');
MesTestsUnitaires.prototype.testsTarif3 = function () {
    assertEquals('500g ', 6.70, recupTarif(500));
    assertEquals('600g', 6.70, recupTarif(600));
    assertEquals('700g', 6.70, recupTarif(700));
};

MesTestsUnitaires = TestCase('TarifsTest');
MesTestsUnitaires.prototype.testsTarif4 = function () {
    assertEquals('750g ', 7.60, recupTarif(750));
    assertEquals('800g', 7.60, recupTarif(800));
    assertEquals('900g', 7.60, recupTarif(900));
};

MesTestsUnitaires = TestCase('TarifsTest');
MesTestsUnitaires.prototype.testsTarif6 = function () {
    assertEquals('1000g ', 8.25, recupTarif(1000));
    assertEquals('1500g', 8.25, recupTarif(1500));
    assertEquals('1900g', 8.25, recupTarif(1900));
};

MesTestsUnitaires = TestCase('TarifsTest');
MesTestsUnitaires.prototype.testsTarif6 = function () {
    assertEquals('2000g ', 9.55, recupTarif(2000));
    assertEquals('3100g', 9.55, recupTarif(3100));
    assertEquals('4000g', 9.55, recupTarif(4000));
};

MesTestsUnitaires = TestCase('TarifsTest');
MesTestsUnitaires.prototype.testsTarif7 = function () {
    assertEquals('5000g ', 14.65, recupTarif(5000));
    assertEquals('7000g', 14.65, recupTarif(7000));
    assertEquals('9200g', 14.65, recupTarif(9200));
};

MesTestsUnitaires = TestCase('TarifsTest');
MesTestsUnitaires.prototype.testsTarif8 = function () {
    assertEquals('10 000g ', 21.30, recupTarif(10000));
    assertEquals('13 000g', 21.30, recupTarif(13000));
    assertEquals('14 000g', 21.30, recupTarif(14000));
};

MesTestsUnitaires = TestCase('TarifsTest');
MesTestsUnitaires.prototype.testsTarif9 = function () {
    assertEquals('15 000g ', 26.95, recupTarif(15000));
    assertEquals('20 000g', 26.95, recupTarif(20000));
    assertEquals('25 000g', 26.95, recupTarif(25000));
};

MesTestsUnitaires = TestCase('TarifsTest');
MesTestsUnitaires.prototype.testsTarif10 = function () {
    assertEquals('30 000g ', 33.40, recupTarif(30000));
};

MesTestsUnitaires = TestCase('TarifsTest');
MesTestsUnitaires.prototype.testsTarif11 = function () {
    assertEquals('33 000g ', null, recupTarif(33000));
    assertEquals('44 000g ', null, recupTarif(44000));
    assertEquals('50 000g ', null, recupTarif(50000));

};


