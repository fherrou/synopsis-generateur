var sujet = ['Un zadiste ', 'Un chasseur ', 'Un promoteur immobilier magouilleur ', 'Un industriel véreux ', 'Un riche héritier texan ', 'Le groupe de PJ '];
var verbe = ['pollue ', 'occupe ', 'massacre ', 'exploite ', 'dessine ', 'se transforme en '];
var objet = ['une ZAD', 'le président du Conseil Général', 'des éoliennes', 'un puits de pétrole', ' une mulette perlière', ' les PJ'];
var complement = [', et il aime ça !', ' sur une ZAD.', ' en rechargeant son fusil.', ' sans le moindre scrupule.', ' pour de l\'argent.', ', puis s\'abonne à Charlie Hebdo.', ' : encore une mission pour les PJ !', ' devant les PJ.', ' et appelle les PJ en renfort.'];

function tirerSynopsis(){
        return sujet[Math.floor(Math.random() * sujet.length)] 
                 + verbe[Math.floor(Math.random() * verbe.length)]
                 + objet[Math.floor(Math.random() * objet.length)]
                 + complement[Math.floor(Math.random() * complement.length)];
}
