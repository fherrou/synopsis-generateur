
<!--
Copyright 2015 Florence Herrou
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

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
