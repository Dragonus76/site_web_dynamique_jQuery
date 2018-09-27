/*
*
Code Javascript Cours deboguer le code jQuery
*
*
*
*/

$(function(){

	//utilisation d'alert
	x = 34;
	y = 50;

	//alert(' x = ' + y = ' + y');

	//je prefere utilisre consol.log-> moins instructif

	console.log('x = ' + x + ', y = ' + y);

	//try catch

	var message='';

	try {

		//erreur volonytaire pour lancer le message d'erreur
		alort('un message');
	}

	catch(err){


		//Messages d'erreur

		message='une erreur s\'est produite.\n\n';

		message+='Description :'+err.message + '\n\n';

		//message+= 'Cliquez sur ok pour porsuivre.';// à utiliser avec alert 
		//alert (message);

		console.log(message);


	}
	 // Capturer toutes les erreurs
//    function gestionErreurs(err) {
//      alert('Erreur : \n' + err);
//      return true;
//    }
//    window.onerror = gestionErreurs;


    // Utiliser firebug ou les outils dev des navigateurs


});