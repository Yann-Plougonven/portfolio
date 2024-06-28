/*Messages de confirmation du lancement du téléchargement du CV au format pdf*/
var alertPlaceholder = document.getElementById('liveAlertPlaceholder') 
var alertTriggerPdfStandard = document.getElementById('liveAlertPdfStandard')
var alertTriggerPdfStandard2 = document.getElementById('liveAlertPdfStandard2')
var alertTriggerPdfPourImpression = document.getElementById('liveAlertPdfPourImpression')

/*Affichage d'une alerte*/
function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

/*Si l'utlisateur télécharge le CV au format pdf en version standard*/
if (alertTriggerPdfStandard) {
  alertTriggerPdfStandard.addEventListener('click', function () {
    alert("Le téléchargement du CV au format PDF a démarré.", 'success')
  })
}

/*Si l'utlisateur télécharge le CV au format pdf en version standard 2*/
if (alertTriggerPdfStandard2) {
  alertTriggerPdfStandard2.addEventListener('click', function () {
    alert("Le téléchargement du CV au format PDF standard a démarré.", 'success')
  })
}

/*Si l'utlisateur télécharge le CV au format pdf en version optimisée pour l'impression*/
if (alertTriggerPdfPourImpression) {
  alertTriggerPdfPourImpression.addEventListener('click', function () {
    alert("Le téléchargement du CV au format PDF optimisé pour l'impression a démarré.", 'success')
  })
}