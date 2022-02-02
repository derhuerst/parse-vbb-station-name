'use strict'

// Some phrases are commonly used in signage to tell two identically
// named (but geographically distinct places) apart. We'll call them
// "differentiator" here.
// Example: "Frankfurt" & "Frankfurt (Oder)".

// Note: This list should only contain those differentiators that are
// used in public transportation signage.

// todo: are some of them duplicates of German license plate prefixes?
const publicTransportDifferentiators = [
	// rivers/lakes
	'Aller', // https://de.wikipedia.org/wiki/Aller
	'Dahme',
	'Dosse',
	'Elbe',
	'Elster', // https://de.wikipedia.org/wiki/Elster_(Begriffsklärung)
	'Havel',
	'M', 'Main',
	'Oder',
	'Müritz',
	'Nuthe Urstromtal', 'Nuthe-Urstromtal', // https://de.wikipedia.org/wiki/Nuthe
	'Saale',
	'Weser',

	// regions/cities
	'Altglobsow',
	'Altmark',
	'Angermünde',
	'Anhalt',
	'Bad Belzig',
	'Bad Dob', 'Bad Dob.', 'Bad Doberan',
	'Bad',
	'Baruth/Mark', 'Baruth',
	'Bay', 'Bay.', 'Bayern',
	'Beelitz',
	'Beeskow',
	'Berlin',
	'Bln', 'Bln.', 'Berlin',
	'Blumenthal',
	'Boitzenbg', 'Boitzenbg.', 'Boitzenburg',
	'Boitzenburg',
	'Boizenbg', 'Boizenbg.', 'Boizenburg',
	'Booßen',
	'Brand', // https://de.wikipedia.org/wiki/Brand_(Begriffsklärung)
	'Brandenburg', 'Brandenburg a.d.H.', // https://de.wikipedia.org/wiki/Brandenburg_(Begriffsklärung)
	'Brenitz',
	'Briesen',
	'Bronkow',
	'Brück',
	'Brüssow',
	'Buckow',
	'Calau',
	'Cottbus',
	'Dahlwitz',
	'Dahlwitz-Hoppegarten',
	'Dahme', // https://de.wikipedia.org/wiki/Dahme/Mark
	'Dannenreich',
	'Dedelow',
	'Drebkau',
	'Dresden',
	'Döbern',
	'Döllen',
	'FF',
	'Fichtwald',
	'Forst', // https://de.wikipedia.org/wiki/Forst_(Begriffsklärung)
	'Fürstenwalde',
	'Gadebusch',
	'Gerswalde',
	'Golßen',
	'Goyatz',
	'Gransee',
	'Groß Köris',
	'Groß',
	'Großwudicke',
	'Gusow',
	'Görlsdorf',
	'Götz',
	'Hagenow',
	'Halenbeck',
	'Halle/Saale',
	'Heinersdorf', // https://de.wikipedia.org/wiki/Heinersdorf
	'Herzberg',
	'Holst', // Holstein
	'Jeserig',
	'Jüterbog',
	'Kleinow',
	'Klinge',
	'Klockow',
	'Kossenblatt',
	'Kr Rostock',
	'Kyritz',
	'Lehnin',
	'Leipzig',
	'Lieberose',
	'Luckau',
	'Luckenwalde',
	'Ludwigsfelde',
	'Ludwigsl', 'Ludwigsl.', 'Ludwigslust',
	'Lychen',
	'Lübben',
	'Lübbenau',
	'Lübtheen',
	'Lübz',
	'Magdeburg',
	'Mark',
	'Meck', 'Meck.', 'Meckl', 'Meckl.', 'Mecklenburg', // wtf
	'Mellen',
	'Missen',
	'Märkische Schweiz',
	'Müncheberg',
	'Münchehofe',
	'Nauen',
	'Nennhausen',
	'Neulewin',
	'Neuruppin',
	'Niedergörsdorf',
	'Niemegk',
	'Niemegk', // https://de.wikipedia.org/wiki/Niemegk_(Kreis_Bitterfeld)
	'Oberlausitz',
	'Oderberg',
	'Oldb', 'Oldb.', 'Oldenburg',
	'Oppelhain',
	'Osterburg',
	'Ostfriesl', 'Ostfriesl.', 'Ostfriesland',
	'Parchim',
	'Pasewalk',
	'Passow',
	'Perleberg',
	'Pfaffendorf',
	'Poel',
	'Premnitz',
	'Prenden',
	'Prenzlau',
	'Pritzwalk',
	'Putlitz',
	'Rehfelde',
	'Riesa',
	'Rietzneuendorf',
	'Rostock',
	'Roßlau',
	'Ruppin',
	'Rüg', 'Rüg.', 'Rügen', // wtf
	'Sachs', 'Sachs.', 'Sachsen',
	'Schwedt',
	'Schwerin',
	'Spreewald',
	'Sternberg',
	'Storkow',
	'Strausberg',
	'Sylt',
	'Tantow',
	'Templin',
	'Teupitz',
	'Trebbin',
	'Trebnitz',
	'Treuenbrietzen',
	'Velten',
	'Vetschau',
	'Waltersdorf',
	'Wandlitz',
	'Westf', 'Westf.', 'Westfalen',
	'Wiesenburg',
	'Wismar',
	'Wittenberge',
	'Wittstock',
	'Wolfshagen',
	'Wriezen',
	'Wusterwitz',
	'Zarrentin', // wtf
	'Ziesar',
	'Zippendorf', // wtf
	'Zossen',
]

// todo: 900553121 Ausbau (Holz-Lange), Upahl

// todo: https://query.wikidata.org/#SELECT%20%3Fitem%20%3FitemLabel%0AWHERE%20%7B%0A%20%20%3Fitem%20wdt%3AP31%20wd%3AQ82794%20.%0A%20%20%3Fitem%20wdt%3AP17%20wd%3AQ183%20.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22de%22%20%7D%0A%7D

module.exports = publicTransportDifferentiators
