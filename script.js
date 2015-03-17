var sujets = ['Un psychopathe ', 'Un savant ', 'Un extraterrestre ', 'Un monstre ', 'Un démon ', 'Un vampire ', 'Un loup-garou ', 'Un caniche nain ', 'Un sorcier ', 'Un poulpe ', 'Un spectre ', 'Un surfer ', 'Des morts-vivants ', 'Des légumes ', 'Des pingouins ', 'Des insectes ', 'Des vieux ', 'Des animaux ', 'Des plantes ', 'Des bimbos '];
var adjectifs = ['géant', 'nain', 'zombi', 'nazi', 'mutant', 'psionique', 'sanguinaire', 'cannibale', 'kamikaze', 'psychopathe', 'polymorphe', 'extraterrestre', 'contortionniste', 'exhibitionniste', 'anarchiste', 'amphibie', 'fou', 'tueur', 'out of control', 'monstrueux'];
var adjectifsFeminins = ['géante', 'naine', 'zombie', 'nazie', 'mutante', 'psionique', 'sanguinaire', 'cannibale', 'kamikaze', 'psychopathe', 'polymorphe', 'extraterrestre', 'contortionniste', 'exhibitionniste', 'anarchiste', 'amphibie', 'folle', 'tueuse', 'out of control', 'monstrueuses'];
var verbes = ['détruire ', 'envahir ', 'gouverner ', 'manger ', 'invoquer', 'enlever', 'attaquer', 'tuer', 'trouver', 'commander', 'brûler', 'exploser', 'atomiser', 'reconstituer', 'utiliser', 'effrayer', 'transformer', 'empoisonner', 'rejoindre', 'voler'];
var objets = ['le monde', 'la ville des héros', 'Mars', 'une créature', 'une centrale nucléaire', 'des enfants', 'une pizza', 'l\'Univers', 'des gens', 'le QG de la police', 'la maison de retraite', 'un grimoire', 'un vaisseau spatial', 'mémé gâteau', 'la pierre philosophale', 'les héros', 'une grotte secrète', 'un gaufrier sacré', 'la planète X', 'la Maison Blanche'];
var complements = ['retourner sur sa planète', 'prendre sa revanche sur les héros', 'satisfaire ses besoins', 'affirmer sa personnalité', 'devenir un dieu', 'devenir encore plus fort', 'devenir maître de la Galaxie', 'se venger', 'détruire tout le monde', 'le plaisir', 'créer un monde nouveau', 'corrompre l\'humanité', ' créer des monstres ignobles', ' se venger des héros', 'conquérir le show-biz', 'comprendre l\'univers', 'apporter la paix', 'mettre fin au capitalisme', 'faire chier Rambo', 'faire une tour Eiffel en carton'];
var complementsPluriels = ['retourner sur leur planète', 'prendre leur revanche sur les héros', 'satisfaire leurs besoins', 'affirmer leur personnalité', 'devenir des dieux', 'devenir encore plus forts', 'devenir maîtres de la Galaxie', 'se venger', 'détruire tout le monde', 'le plaisir', 'créer un monde nouveau', 'corrompre l\'humanité', ' créer des monstres ignobles', ' se venger des héros', 'conquérir le show-biz', 'comprendre l\'univers', 'apporter la paix', 'mettre fin au capitalisme', 'faire chier Rambo', 'faire une tour Eiffel en carton'];
var complementsFeminins = ['retourner sur leur planète', 'prendre leur revanche sur les héros', 'satisfaire leurs besoins', 'affirmer leur personnalité', 'devenir des déesses', 'devenir encore plus fortes', 'devenir maîtresses de la Galaxie', 'se venger', 'détruire tout le monde', 'le plaisir', 'créer un monde nouveau', 'corrompre l\'humanité', ' créer des monstres ignobles', ' se venger des héros', 'conquérir le show-biz', 'comprendre l\'univers', 'apporter la paix', 'mettre fin au capitalisme', 'faire chier Rambo', 'faire une tour Eiffel en carton'];

function tirerSynopsis() {
  var numSujet = Math.floor(Math.random() * 20);
  var pluriel = (numSujet > 11);
  var feminin = (numSujet > 17);
  var numAdjectif = Math.floor(Math.random() * 20);
  var adjectif = feminin? adjectifsFeminins[numAdjectif] : adjectifs[numAdjectif];
  var complement = '';
  if (feminin) {
    complement = complementsFeminins[Math.floor(Math.random() * 20)];
  } else if (pluriel) {
    complement = complementsPluriels[Math.floor(Math.random() * 20)];
  } else {
    complement = complements[Math.floor(Math.random() * 20)];
  }
  
  return sujets[numSujet] + adjectif
      + ((pluriel && numAdjectif < 18)? 's ' : ' ') 
      + (pluriel? 'veulent ' : 'veut ' )
      + verbes[Math.floor(Math.random() * 20)] 
      + ' ' + objets[Math.floor(Math.random() * 20)] 
      + ' pour ' + complement + '.';

}