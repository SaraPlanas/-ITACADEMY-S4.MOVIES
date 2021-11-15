# -ITACADEMY-S4.MOVIES
Cuarto Sprint en el curso de React de IT Academy

Una empresa del sector audiovisual ens ha demanat una aplicació web, que li permeti als seus empleats trobar ràpidament pel·lícules d'una gran base de dades que posseeixen, ja que el procés actualment es realitza de manera manual.
Seràs l'encarregat de muntar el core de l'aplicació: tota la lògica de filtrat i ordenament de pel·lícules.

- És obligatori implementar tots els bucles en ES6 (usant map, reduce, filter i sort per a manipular arrays).
- Com de moment no consumim dades d'un servidor usant una API, treballarem amb dades de l'arxiu src/data.js. De moment implementarem la lògica usant
un array d'informació sobre 250 pel·lícules.
- El lliurament es tracta de processar aquest array de pel·lícules, per a mostrar-ho com es demana en cada exercici.
- La lògica a implementar l'hauràs de posar en l'arxiu src/films.js.
-  No fa falta mostrar el resultat de cada funció per pantalla. El teu objectiu és superar els tests.  Més informació de com programar orientat a superar test al final del document
- No se t'oblidi incloure la captura dels resultats dels tests al campus virtual.
- Està prohibit copiar el codi, ja que d'aquesta manera no s'aprèn res. A més com podràs observar, després del lliurament del sprint 5 és una miniprueba de nivell amb el mentor, el la que hauràs de demostrar en directe que has adquirit els conceptes de javascript. No et preocupis, si treballes els lliuraments la superaràs sense problemes.


Nivell 1
- Exercici 1
S'ha de mostrar per pantalla a l'usuari només els directors de les pel·lícules. 
Per a obtenir el array de directors, has de crear la funció getAllDirectors().
No has de fer el renderitzat del resultat en aquesta funció, ha de retornar el array de directors. L'objectiu és mantenir cada funció amb una única responsabilitat.

- Exercici 2
Una altra funcionalitat necessària, és mostrar les pel·lícules per a un determinat director.
Per a això, hauràs de crear una funció getMoviesFromDirector(). 
Està funció ha de rebre com a paràmetre el director per al qual es volen buscar les seves pel·lícules, i retorna el array de pel·lícules que ha dirigit.

- Exercici 3
Genial, ja tens el array de pel·lícules per a un determinat director.
Per a tenir més informació d'aquest director, es demana calcular la mitjana de les puntuacions de les seves pel·lícules.
Per a això, tenrás que implementar la funció moviesAverage(), la qual rep un array de pel·lícules i retorna la nota mitjana, amb dos decimals.

- Exercici 4
Enhorabona, ja tenes creats tots els filtres que permetran extreure tota la informació necessària sobre els directors!
Ara en aquest exercici i el següent implementaràs la lògica per a ordenar les pel·lícules, part fonamental en qualsevol eina de visualització de dades.
En aquest apartat, hauràs de crear una funció, que rebent un array de pel·lícules, el retorni ordenat alfabèticament per títol. 
Només s'han de retornar les 20 primeres pel·lícules ordenades.

- Exercici 5
Ja només et falta una segona funció que ordeni les pel·lícules.
En aquesta ocasió, hauràs d'implementar una funció que rebent un array de pel·lícules, retorna un array de pel·lícules ordenades per any.
Com podràs observar, hi ha moltes pel·lícules que coincideixen en un mateix any. Per a ordenar aquestes pel·lícules que tenen el mateix any, s'ha de fer per ordre alfabètic del títol.

- Exercici 6
Ho estàs fent molt bé, ja has creat una aplicació web amb moltes eines que podran ajudar als usuaris!
En aquest apartat, és necessari donar la possibilitat als usuaris de demanar la nota mitjana de les pel·lícules d'un determinat gènere.
Hauràs de crear una funció que rebi una categoria de pel·lícula,  i calculi la mitjana de nota d'aquesta categoria (sobre el array de totes les pel·lícules).
Per a facilitar-te la implementació, hauràs d'usar la funció creada en l'exercici 3. Primer has d'obtenir les pel·lícules d'una determinada categoria, i després cridar a moviesAverage(), per a calcular la seva mitjana.
Aquí radica la potència de les funcions, pots reutilitzar-les tantes vegades com vulguis!


Nivell 2
- Exercici 7
Com hauràs pogut observar, la durada de les pel·lícules del array ve en hores i minuts.
Això és un problema per a comparar-les fàcilment, per la qual cosa hauràs de modificar aquest format de durada.
Has de crear una funció que rebent un array de pel·lícules, retorna un array amb estàs pel·lícules però amb la durada en minuts!


Nivell 3
- Exercici 8
Ja estàs arribant al final, només fa falta implementar una última funcionalitat!
Els usuaris necessiten saber quina pel·lícula és la millor de cada any. Per a dur a terme està funcionalitat, hauràs de crear una funció que accepti l'any, i retorni la millor pel·lícula d'aquest any.