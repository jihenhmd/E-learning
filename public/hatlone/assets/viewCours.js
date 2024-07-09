// fonction pour l'ajout du pop-up et un fond gris
function maFunction() {
  let myEleme= document.querySelector('.pop-up-overlay');
  let myPop=document.querySelector('.overlay')

    myEleme.classList.add ('open');//ajouter la classe open pour afficher le pop-up
    myPop.classList.add('active'); // Ajoute la classe active pour afficher le fond gris
    
}

// fonction pour la fermeture du pop-up après le pointe sur le croix de pop-up
  
function fermeturePopup(){
  

let myCroix=document.querySelector('.pop-up-overlay');
let myPop=document.querySelector('.overlay');
myCroix.classList.remove('open');//suppression du classe open pour masquer le pop-up
myPop.classList.remove('active');//supression du classe active pour masquer le fond gris
}
// fonction pour l'ajout du pop-up-tag et un fond gris
function tagPopup() {
  let myEleme= document.querySelector('.pop-up-tag');
  let myPop=document.querySelector('.overlay')

    myEleme.classList.add ('open');//ajouter la classe open pour afficher le pop-up
    myPop.classList.add('active'); // Ajoute la classe active pour afficher le fond gris
    
}
function fermetureTagPopup(){

  let myCroix=document.querySelector('.pop-up-tag');
  let myPop=document.querySelector('.overlay');
  myCroix.classList.remove('open');//suppression du classe open pour masquer le pop-up
  myPop.classList.remove('active');//supression du classe active pour masquer le fond gris
  }
  // fonction pour l'ajout du pop-up-tag et un fond gris
function notePopup() {
  let myEleme= document.querySelector('.pop-up-note')
  let myPop=document.querySelector('.overlay')

    myEleme.classList.add ('open');//ajouter la classe open pour afficher le pop-up
    myPop.classList.add('active'); // Ajoute la classe active pour afficher le fond gris
    
}
function fermeturePopupNote(){

  let myCroix=document.querySelector('.pop-up-note');
  let myPop=document.querySelector('.overlay');
  myCroix.classList.remove('open');//suppression du classe open pour masquer le pop-up
  myPop.classList.remove('active');//supression du classe active pour masquer le fond gris
  }
  
  // Sélection de l'icône et du sidebar
let reduceIcon = document.getElementById('reduce-icon');
let sidebarContent = document.querySelector('.sidebar-content');
let h2=document.querySelector('.lecture h2')
let isContentHidden = false;
// Sélectionnez toutes les sections
const sections = document.querySelectorAll('.item-section');
let lastClickedItem = document.querySelector('.activating');

// Ajoutez un gestionnaire d'événements à chaque section
sections.forEach(function(section) {
    section.addEventListener('click', function(e) {
        // Retirez la classe 'active' de toutes les sections
        e.preventDefault()
        currenIndex = 0
        totalCompleted=0;
        progressBar.style.width='0'
        document.querySelectorAll('.item-section').forEach(function(sec) {
            sec.classList.remove('activating');
            if(sec !==section.innerText.trim()){
              sec.classList.add('item-sectioned')
            }
        });
        
        
        document.querySelectorAll('.python-detail').forEach(course =>{
          course.classList.remove('actif')
        })

        // Ajoutez la classe 'active' à la section cliquée
        if (lastClickedItem && lastClickedItem !== this) {
          

          lastClickedItem.classList.add('item-sectioned');
          lastClickedItem.classList.remove('activating');
      }
        this.classList.add('activating'); 
        this.classList.remove('item-sectioned')
        lastClickedItem = this;
        // Masquez toutes les sections de contenu
       document.querySelectorAll('.item-sec ul').forEach(function(content) {
            content.classList.add('displ');
        });
        indexSection=this.id.substring("section".length);
        console.log(indexSection)
        const ulElement = this.nextElementSibling; // Récupérez l'élément ul suivant
        if (ulElement) {
        // Affichez le contenu de la section cliquée
        const sectionId = ulElement.id.substring("sectionContent".length);
         // Récupérez l'ID de la section cliquée
        
        
        document.getElementById('sectionContent' + sectionId).classList.remove('displ');
        ulElement.querySelector('.item-content .python-detail').classList.add('actif')
        ulElement.querySelector('.item-content .python-detail').classList.remove('gris')
        ulElement.querySelector('.item-content .python-detail').querySelector('a').classList.remove('non-actif')
        ulElement.querySelector('.item-content .python-detail').querySelector('i').classList.add('actif')
        let liElement=ulElement.querySelector('.item-content .python-detail a')
        h2.innerText=liElement.innerText.trim()
          if(liElement.innerText.trim()==='Introduction python'){
            fetch('/learn')
            .then(response => response.text())
            .then(data => {
              // Sélectionnez la balise cible dans laquelle vous souhaitez intégrer le contenu
              const section = document.querySelector('section');
    
              // Mettez à jour le contenu de la balise avec le contenu chargé du fichier externe
              section.innerHTML = data;
              initialeVariables()
                updateProgressionCount()
               attachEvent()
                initializeVariables();
                attachEventHandlers();
                displayInitialThree()
                
                clicButton()
            })
            .catch(error => {
              console.error('Une erreur s\'est produite : ', error);
            });
          }else if(liElement.innerText.trim()==='Historical python'){
           
              fetch('/historic')
              .then(response => response.text())
              .then(data => {
                // Sélectionnez la balise cible dans laquelle vous souhaitez intégrer le contenu
                const section = document.querySelector('section');
                section.innerHTML = data;
                initialeVariables()
                updateProgressionCount()
               attachEvent()
                initializeVariables();
                attachEventHandlers();
                displayInitialThree()
                
                clicButton()
              })
            }
            else if(liElement.innerText.trim()==='Conditional control'){
           
              fetch('/condition')
              .then(response => response.text())
              .then(data => {
                // Sélectionnez la balise cible dans laquelle vous souhaitez intégrer le contenu
                const section = document.querySelector('section');
                section.innerHTML = data;
                initialeVariables()
                updateProgressionCount()
               attachEvent()
                initializeVariables();
                attachEventHandlers();
                displayInitialThree()
                
                clicButton()
              })
            }else if(liElement.innerText.trim()==='Python numbers'){
           
              fetch('/number')
              .then(response => response.text())
              .then(data => {
                // Sélectionnez la balise cible dans laquelle vous souhaitez intégrer le contenu
                const section = document.querySelector('section');
                section.innerHTML = data;
                initialeVariables()
                updateProgressionCount()
               attachEvent()
                initializeVariables();
                attachEventHandlers();
                displayInitialThree()
                
                clicButton()
              })
          }else{
            const section = document.querySelector('section');
          section.innerHTML = contenuInitial;
          initialeVariables()
                updateProgressionCount()
               attachEvent()
                initializeVariables();
                attachEventHandlers();
                displayInitialThree()
                
                clicButton()
          }
        }
        
    });
});

// sélection du sous-section
const subMenu = document.querySelectorAll('.python-detail');
// ajouter un gestionnaire d'événnements à chaque sous-section
subMenu.forEach(subSection => {
  subSection.addEventListener('click', e => {
    e.preventDefault();
    // Supprime la classe "actif" de tous les éléments .python-detail et ajouter la classe gris
    document.querySelectorAll('.python-detail').forEach(sub => {
      sub.classList.remove('actif'); // Supprimer la classe "gris"
      sub.classList.add('gris');
    });
    // Supprime la classe "non-actif" de tous les éléments <a> à l'intérieur de .python-detail
    document.querySelectorAll('.python-detail a').forEach(anchor => {
      anchor.classList.add('non-actif');
    });
    
    // Ajoute la classe "actif" uniquement à l'élément sur lequel l'événement a été déclenché
    subSection.classList.add('actif');
    
  });
});




// séléction du sous-section, les contents et l'élément qui affiche le nombre de l'oveflow
const container=document.querySelectorAll('.item-section-content')

const pythonDetail = document.querySelectorAll('.python-detail');
const listIcons = document.querySelectorAll('.list-icons');
const hiddenIndicator=document.getElementById('hiddenIndicator');

// fonction qui décrire les styles appliqués si on fait mousover sur  les contents
function applyStyles(element) {
    element.style.overflow = 'visible';
    element.style.color = 'initial';
    element.style.transform = 'translateX(-50%)';
}
// fonction qui décrire les styles appliqués sur les contents si on fait mouseover sur les sous-section
function applyStylesOnPythonDetail(clickedPythonDetail) {
  const listIcons = clickedPythonDetail.nextElementSibling; //récupérer l'élément suivant(contents) du sous-section 
  if (listIcons && listIcons.classList.contains('list-icons')) {
      listIcons.style.overflow = 'visible';
      listIcons.style.color = 'initial';
      listIcons.style.transform = 'translateX(-50%)';
  
      
  }
}
// fonction qui décrire les styles sur les contents si on fait mousout au sous-sections et leurs contenus 
function resetStyles() {
    listIcons.forEach(icon => {
        icon.style.overflow = 'hidden';
        icon.style.transform = 'none';
    });
}

// ajouter un gestionnaire d'événnements au sous-sections
pythonDetail.forEach(elem => {
  elem.addEventListener('mouseover', (event) => {
     
      applyStylesOnPythonDetail(event.currentTarget);
     
  });
})

listIcons.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        applyStyles(event.currentTarget);
        

    });
});

// Attacher un gestionnaire d'événements mouseout à chaque élément .item-section-content

container.forEach(cont=>{
  
  cont.addEventListener('mouseout', event => {
    
 
    if (!event.target.matches('.python-detail, .list-icons')) {
      resetStyles();
     
    }
});

})

// Fonction pour calculer le nombre d'éléments qui dépassent et les stocker dans le localStorage
function calculateOverflowCounts() {
  document.querySelectorAll('.item-section-content').forEach(ite => {
      ite.querySelectorAll('.list-icons').forEach(listIcon => {
          let hiddenCount = 0;
          const icons = listIcon.querySelectorAll('.icone');
          icons.forEach((icon, index) => {
              if (index >= 3) {
                  hiddenCount++;
              }
          });
          // Stocker le nombre d'éléments qui dépassent dans le stockage local
          localStorage.setItem(listIcon.id, hiddenCount);
      });
  });
}


// Fonction pour afficher les nombres d'éléments qui dépassent récupérés depuis le localStorage
function displayOverflowCounts() {
  document.querySelectorAll('.item-section-content').forEach(ite => {
      ite.querySelectorAll('.list-icons').forEach(listIcon => {
          const hiddenIndicator = ite.querySelector('.hiddenIndicator');
          if (hiddenIndicator) {
              // Récupérer le nombre d'éléments qui dépassent depuis le stockage local
              const hiddenCount = localStorage.getItem(listIcon.id);
              if (hiddenCount == 0) {
                hiddenIndicator.textContent='';
                hiddenIndicator.style.backgroundColor='#18283b';
              }else{
                  hiddenIndicator.textContent = `+(${hiddenCount})`;
                
                  
              }
          }
      });
  });
}

window.onload = function() {
// Appeler la fonction pour calculer le nombre d'éléments qui dépassent lors du chargement de la page
calculateOverflowCounts();

// Appeler la fonction pour afficher les nombres d'éléments qui dépassent récupérés depuis le localStorage
displayOverflowCounts();
}


// Sélectionner tous les éléments de la section principale
let sectionsMain = document.querySelectorAll('.item-section .items');
let sectionMain = Array.from(sectionsMain);

// Sélectionner les éléments de la section principale et le bouton précédent
let sec = document.querySelector('.section');
let  previous = document.querySelector('.lefter');
let nexted=document.querySelector('.righting');
let sousSection=document.querySelector('.lecture-header')
let left=sousSection.querySelector('.lecture .left')
let right=sousSection.querySelector('.lecture .righter')

// Ajouter un événement de clic au bouton précédent
previous.addEventListener('click', event => {
  event.preventDefault();
  totalCompleted=0;
  currenIndex = 0
 
  indexSection--
  sousSection.querySelector('.lecture .righter').classList.remove('prev');
     
  currenIndex = 0
  progressBar.style.width=0;
  

  // sousSection.querySelector('.lecture .righter').classList.remove('prev');
  let before = sec.querySelector('.lefter h5').innerText.trim();
  for (let i = 0; i < sectionMain.length; i++) {
    let h5 = sectionMain[i];
    

    
          
  let nexSibling = sectionMain[i].parentElement.nextElementSibling;
  if (h5 && h5.textContent.trim() === before){
    
  let subs=nexSibling.querySelectorAll('.item-content')
    
 
  if(currenIndex===0 && currenIndex===subs.length-1){
    // sousSection.querySelector('.lecture .righter i ').style.color='#241d60';
      sousSection.querySelector('.lecture .left i ').style.color='  #b6b2b2';
      sousSection.querySelector('.lecture .left').classList.add('prev');
        sousSection.querySelector('.lecture .righter i ').style.color='#b6b2b2';
        sousSection.querySelector('.lecture .righter').classList.add('prev') 
    }
  
    else if(currenIndex===0 && currenIndex!==subs.length-1){
  
        sousSection.querySelector('.lecture .left i ').style.color='  #b6b2b2';
        sousSection.querySelector('.lecture .left').classList.add('prev') 
        sousSection.querySelector('.lecture .righter i ').style.color='#241d60';
        sousSection.querySelector('.lecture .righter').classList.remove('prev')     
      }
    else{
      sousSection.querySelector('.lecture .righter i ').style.color='#241d60';
       sousSection.querySelector('.lecture .left i ').style.color='#241d60';
       sousSection.querySelector('.lecture .left').classList.remove('prev')  
       sousSection.querySelector('.lecture .righter').classList.remove('prev')  
   }
}
}
  
  
  progressBar.style.width=0;
  if (sec.querySelector('.lefter h5').innerText === "") {
    sec.querySelector('.lefter h5').classList.add('prev');
  } else {
    sec.querySelector('.lefter h5').classList.remove('prev');

    // Récupérer le texte de .lefter h5
   

    // Chercher le texte dans .items et récupérer son index
   
    for (let i = 0; i < sectionMain.length; i++) {
  sectionMain[i].classList.remove('activating');
}
for (let i = 0; i < sectionMain.length; i++) {
  let parent = sectionMain[i].closest('.item-section');
  console.log(parent)
  if (parent) {
    parent.classList.remove('bloque');
    let nextSibling = parent.nextElementSibling;
    if (nextSibling) {
      nextSibling.classList.add('displ');
    }
  }
  

}
document.querySelectorAll('.item-section').forEach(sect=>{
  sect.classList.remove('activating')
})
let currentIndex = -1;
for (let i = sectionMain.length - 1 ; i >= 0; i--) {
     
      let h5 = sectionMain[i];
      console.log(sectionMain[i].parentElement)
      if (h5 && h5.textContent.trim() !== before){
        sectionMain[i].parentElement.classList.remove('activating')
        sectionMain[i].parentElement.classList.add('item-sectioned');
      }
    
    else if (h5 && h5.textContent.trim() === before) {
       
        sectionMain[i].parentElement.classList.add('activating')
        sectionMain[i].parentElement.classList.remove('item-sectioned');
        sectionMain[i].parentElement.classList.remove('bloque')
        sectionMain[i].parentElement.nextElementSibling.classList.remove('displ')
        let nextSibling = sectionMain[i].parentElement.nextElementSibling;
        console.log(nextSibling)
        if (nextSibling) {
          let liElement = nextSibling.querySelector('.item-content');
    
    if (liElement) {
        let pythonDetail = liElement.querySelector('.python-detail');
        
        if (pythonDetail) {
            pythonDetail.classList.add('actif');
            pythonDetail.classList.remove('gris');
            
            // Corrigé: `sec` est `pythonDetail`, donc on utilise `pythonDetail`
            let checkIcon = pythonDetail.querySelector('.fa-regular.fa-circle-check');
            if (checkIcon) {
                checkIcon.classList.add('actif');
            }
            
            let link = pythonDetail.querySelector('a');
            if (link) {
                link.classList.remove('non-actif');
            }

            // Supposons que `sousSection` est une variable définie quelque part dans votre code
            if (typeof sousSection !== 'undefined' && sousSection) {
                let sousSectionTitle = sousSection.querySelector('.lecture h2');
                
                if (sousSectionTitle) {
                    sousSectionTitle.innerText = liElement.querySelector('a').innerText.trim();
                }
            } else {
                console.log('sousSection n\'est pas défini.');
            }
        } else {
            console.log('.python-detail n\'a pas été trouvé dans liElement.');
        }
    } else {
        console.log('.item-content n\'a pas été trouvé dans nextSibling.');
    }
          if(sousSection.innerText.trim()==='Introduction python'){
            fetch('/learn')
            .then(response => response.text())
            .then(data => {
              // Sélectionnez la balise cible dans laquelle vous souhaitez intégrer le contenu
              const section = document.querySelector('section');
    
              // Mettez à jour le contenu de la balise avec le contenu chargé du fichier externe
              section.innerHTML = data;
              initialeVariables()
              updateProgressionCount()
             attachEvent()
              initializeVariables();
              attachEventHandlers();
              displayInitialThree()
              
              clicButton()
            })
            .catch(error => {
              console.error('Une erreur s\'est produite : ', error);
            });
          }if(sousSection.innerText.trim()==='Python numbers'){
           
              fetch('/documentation')
              .then(response => response.text())
              .then(data => {
                // Sélectionnez la balise cible dans laquelle vous souhaitez intégrer le contenu
                const section = document.querySelector('section');
      
                // Mettez à jour le contenu de la balise avec le contenu chargé du fichier externe
                section.innerHTML = data;
                initialeVariables()
                updateProgressionCount()
               attachEvent()
                initializeVariables();
                attachEventHandlers();
                displayInitialThree()
                
                clicButton()
              })
              .catch(error => {
                console.error('Une erreur s\'est produite : ', error);
              });
          }else {
            const section = document.querySelector('section');
          section.innerHTML = contenuInitial;
          initialeVariables()
          updateProgressionCount()
         attachEvent()
          initializeVariables();
          attachEventHandlers();
          displayInitialThree()
          
          clicButton()
          }
        
      }

      

    

        currentIndex = i;
        break;
      }
    
      
    }

    // Mettre à jour le titre de la section principale avec le texte de .lefter h5
    sec.querySelector('h1').innerText = before;

    // Mettre à jour .lefter h5 avec la section précédente et .righting h5 avec la section suivante
    if (currentIndex >= 0) {
      let prevIndex = currentIndex - 1;
      let nextIndex = currentIndex + 1;

      if (prevIndex >= 0) {
        sec.querySelector('.lefter h5').innerText = sectionMain[prevIndex].textContent.trim();
      } else {
        sec.querySelector('.lefter h5').innerText = '';
      }

      if (nextIndex < sectionMain.length) {
        sec.querySelector('.righting h5').innerText = sectionMain[nextIndex].textContent.trim();
      } else {
        sec.querySelector('.righting h5').innerText = '';
      }
    }


    
   
  }


});

document.addEventListener('DOMContentLoaded',function(){
  currenIndex = 0
  
  

  // sousSection.querySelector('.lecture .righter').classList.remove('prev');
  let after = sec.querySelector('.righting h5').innerText.trim();
  for (let i = 0; i < sectionMain.length; i++) {
    let h5 = sectionMain[i];
    

    
          
  let nexSibling = sectionMain[i].parentElement.nextElementSibling;
  if (h5 && h5.textContent.trim() === after){
    
  let subs=nexSibling.querySelectorAll('.item-content')
    
  
  if(currenIndex===0 && currenIndex===subs.length-1){
    // sousSection.querySelector('.lecture .righter i ').style.color='#241d60';
      sousSection.querySelector('.lecture .left i ').style.color='  #b6b2b2';
      sousSection.querySelector('.lecture .left').classList.add('prev');
        sousSection.querySelector('.lecture .righter i ').style.color='#b6b2b2';
        sousSection.querySelector('.lecture .righter').classList.add('prev') 
    }
  
    else if(currenIndex===0 && currenIndex!==subs.length-1){
  
        sousSection.querySelector('.lecture .left i ').style.color='  #b6b2b2';
        sousSection.querySelector('.lecture .left').classList.add('prev') 
        sousSection.querySelector('.lecture .righter i ').style.color='#241d60';
        sousSection.querySelector('.lecture .righter').classList.remove('prev')     
      }
    else{
      sousSection.querySelector('.lecture .righter i ').style.color='#241d60';
       sousSection.querySelector('.lecture .left i ').style.color='#241d60';
       sousSection.querySelector('.lecture .left').classList.remove('prev')  
       sousSection.querySelector('.lecture .righter').classList.remove('prev')  
   }
}
}
  const section = document.querySelector('section');
  section.innerHTML = contenuInitial;
  initialeVariables()
  updateProgressionCount()
 attachEvent()
  initializeVariables();
  attachEventHandlers();
  displayInitialThree()
  
  clicButton()
  
})


nexted.addEventListener('click', event => {
  event.preventDefault();
  totalCompleted=0
  indexSection++
  
  currenIndex = 0
  progressBar.style.width=0;
  

  // sousSection.querySelector('.lecture .righter').classList.remove('prev');
  let after = sec.querySelector('.righting h5').innerText.trim();
  for (let i = 0; i < sectionMain.length; i++) {
    let h5 = sectionMain[i];       
  let nexSibling = sectionMain[i].parentElement.nextElementSibling;
  if (h5 && h5.textContent.trim() === after){
    console.log(h5)
  let subs=nexSibling.querySelectorAll('.item-content')
  console.log(subs.length-1)
    
  if(currenIndex===0 && currenIndex===subs.length-1){
  // sousSection.querySelector('.lecture .righter i ').style.color='#241d60';
    sousSection.querySelector('.lecture .left i ').style.color='  #b6b2b2';
    sousSection.querySelector('.lecture .left').classList.add('prev');
      sousSection.querySelector('.lecture .righter i ').style.color='#b6b2b2';
      sousSection.querySelector('.lecture .righter').classList.add('prev') 
  }

  else if(currenIndex===0 && currenIndex!==subs.length-1){

      sousSection.querySelector('.lecture .left i ').style.color='  #b6b2b2';
      sousSection.querySelector('.lecture .left').classList.add('prev') 
      sousSection.querySelector('.lecture .righter i ').style.color='#241d60';
      sousSection.querySelector('.lecture .righter').classList.remove('prev')     
    }
  else{
    sousSection.querySelector('.lecture .righter i ').style.color='#241d60';
     sousSection.querySelector('.lecture .left i ').style.color='#241d60';
     sousSection.querySelector('.lecture .left').classList.remove('prev')  
     sousSection.querySelector('.lecture .righter').classList.remove('prev')  
 }

}
  }

  if (sec.querySelector('.righting h5').innerText === "") {
    sec.querySelector('.lefter h5').classList.add('prev');
  } else {
    sec.querySelector('.lefter h5').classList.remove('prev');

    // Récupérer le texte de .righting h5
   
for (let i = 0; i < sectionMain.length; i++) {
  sectionMain[i].classList.remove('activating');
  

}
let subSec=document.querySelectorAll('.python-detail')

for(let i=0;i<subSec.length;i++){
subSec[i].classList.remove('actif')
}
document.querySelectorAll('.item-section').forEach(sect=>{
  sect.classList.remove('activating')
})
for (let i = 0; i < sectionMain.length; i++) {
  let parent = sectionMain[i].closest('.item-section');
  console.log(parent)
  if (parent) {
    parent.classList.remove('bloque');
    let nextSibling = parent.nextElementSibling;
    if (nextSibling) {
      nextSibling.classList.add('displ');
    }
  }
}
    // Chercher le texte dans .items et récupérer son index
    let currentIndex = -1;
    
    for (let i = 0; i < sectionMain.length; i++) {
      let h5 = sectionMain[i];


      if (h5 && h5.textContent.trim() !== after){
        sectionMain[i].parentElement.classList.remove('activating')
        sectionMain[i].parentElement.classList.add('item-sectioned');
      }
     else if (h5 && h5.textContent.trim() === after) {
        sectionMain[i].parentElement.classList.add('activating')
        sectionMain[i].parentElement.classList.remove('item-sectioned');
        sectionMain[i].parentElement.classList.remove('bloque')
        sectionMain[i].parentElement.nextElementSibling.classList.remove('displ')
        let nextSibling = sectionMain[i].parentElement.nextElementSibling;
        console.log(nextSibling)


if (nextSibling) {
    
    
    let liElement = nextSibling.querySelector('.item-content');
    
    if (liElement) {
        let pythonDetail = liElement.querySelector('.python-detail');
        
        if (pythonDetail) {
            pythonDetail.classList.add('actif');
            pythonDetail.classList.remove('gris');
            
            // Corrigé: `sec` est `pythonDetail`, donc on utilise `pythonDetail`
            let checkIcon = pythonDetail.querySelector('.fa-regular.fa-circle-check');
            if (checkIcon) {
                checkIcon.classList.add('actif');
            }
            
            let link = pythonDetail.querySelector('a');
            if (link) {
                link.classList.remove('non-actif');
            }

            // Supposons que `sousSection` est une variable définie quelque part dans votre code
            if (typeof sousSection !== 'undefined' && sousSection) {
                let sousSectionTitle = sousSection.querySelector('.lecture h2');
                
                if (sousSectionTitle) {
                    sousSectionTitle.innerText = liElement.querySelector('a').innerText.trim();
                }
            } else {
                console.log('sousSection n\'est pas défini.');
            }
        } else {
            console.log('.python-detail n\'a pas été trouvé dans liElement.');
        }
    } else {
        console.log('.item-content n\'a pas été trouvé dans nextSibling.');
    }
        if(sousSection.innerText.trim()==='Introduction python'){
          fetch('/learn')
          .then(response => response.text())
          .then(data => {
            // Sélectionnez la balise cible dans laquelle vous souhaitez intégrer le contenu
            const section = document.querySelector('section');
  
            // Mettez à jour le contenu de la balise avec le contenu chargé du fichier externe
            section.innerHTML = data;
            initialeVariables()
            attachEvent()
            initializeVariables();
          attachEventHandlers();
          displayInitialThree();
        clicButton()
          })
          .catch(error => {
            console.error('Une erreur s\'est produite : ', error);
          });
        } else if(sousSection.innerText.trim()==='Python numbers'){
         
            fetch('/number')
            .then(response => response.text())
            .then(data => {
              // Sélectionnez la balise cible dans laquelle vous souhaitez intégrer le contenu
              const section = document.querySelector('section');
    
              // Mettez à jour le contenu de la balise avec le contenu chargé du fichier externe
              section.innerHTML = data;
              initialeVariables()
              attachEvent()
              initializeVariables();
            attachEventHandlers();
            displayInitialThree();
            updateProgressionCount();
            clicButton()
            })
            .catch(error => {
              console.error('Une erreur s\'est produite : ', error);
            });
        }else if (sousSection.innerText.trim()==='Historical python'){
         
          fetch('/historic')
          .then(response => response.text())
          .then(data => {
            // Sélectionnez la balise cible dans laquelle vous souhaitez intégrer le contenu
            const section = document.querySelector('section');
  
            // Mettez à jour le contenu de la balise avec le contenu chargé du fichier externe
            section.innerHTML = data;
            initialeVariables()
            attachEvent()
            initializeVariables();
          attachEventHandlers();
          displayInitialThree();
          updateProgressionCount();
          clicButton()
          })
          .catch(error => {
            console.error('Une erreur s\'est produite : ', error);
          });
        }
        else if(sousSection.innerText.trim()==='Conditional control'){
         
          fetch('/condition')
          .then(response => response.text())
          .then(data => {
            // Sélectionnez la balise cible dans laquelle vous souhaitez intégrer le contenu
            const section = document.querySelector('section');
  
            // Mettez à jour le contenu de la balise avec le contenu chargé du fichier externe
            section.innerHTML = data;
            initialeVariables()
            attachEvent()
            initializeVariables();
          attachEventHandlers();
          displayInitialThree();
          updateProgressionCount();
          clicButton()
          })
          .catch(error => {
            console.error('Une erreur s\'est produite : ', error);
          });
        }else {
          const section = document.querySelector('section');
        section.innerHTML = contenuInitial;
        initialeVariables()
        attachEvent()
        initializeVariables();
        attachEventHandlers();
        displayInitialThree();
       
        clicButton()
        }
      
}

        currentIndex = i;
        break;
      }
    }

    // Mettre à jour le titre de la section principale avec le texte de .righting h5
    sec.querySelector('h1').innerText = after;

    // Mettre à jour .lefter h5 avec la section avant et .righting h5 avec la section suivante
    if (currentIndex >= 0) {
      let prevIndex = currentIndex - 1;
      let nextIndex = currentIndex + 1;

      if (prevIndex >= 0) {
        sec.querySelector('.lefter h5').innerText = sectionMain[prevIndex].textContent.trim();
      } else {
        sec.querySelector('.lefter h5').innerText = '';
      }

      if (nextIndex < sectionMain.length) {
        sec.querySelector('.righting h5').innerText = sectionMain[nextIndex].textContent.trim();
      } else {
        sec.querySelector('.righting h5').innerText = '';
      }
    }
  }
});
 


document.querySelectorAll('.item-section').forEach(lien => {
  lien.addEventListener('click', event => {
    event.preventDefault();
    let title = lien.querySelector('span').innerText.trim();
    let sectionTitle = document.querySelector('.section');
    sectionTitle.querySelector('h1').innerText = title;

    let previousElement = lien.parentElement.previousElementSibling;
    if (previousElement) {
      sectionTitle.querySelector('.lefter h5').innerText = previousElement.querySelector('.item-section span').innerText.trim();
    } else {
      sectionTitle.querySelector('.lefter h5').innerText = '';
    }

    let nextElement = lien.parentElement.nextElementSibling;
    if (nextElement) {
      sectionTitle.querySelector('.righting h5').innerText = nextElement.querySelector('.item-section span').innerText.trim();
    } else {
      sectionTitle.querySelector('.righting h5').innerText = '';
    }
    
  });
});


//
const contenuInitial = document.querySelector('section').innerHTML;
document.querySelectorAll('.item-sec ul li span a').forEach(sub => {
  sub.addEventListener('click', e => {
    e.preventDefault();
    let lecture = document.querySelector('.lecture-header');
    lecture.querySelector('.lecture h2').innerText = sub.innerText.trim();
    if (sub.innerText.trim() === 'Coding') {
      fetch('/documentation')
        .then(response => response.text())
        .then(data => {
          // Sélectionnez la balise cible dans laquelle vous souhaitez intégrer le contenu
          const section = document.querySelector('section');

          // Mettez à jour le contenu de la balise avec le contenu chargé du fichier externe
          section.innerHTML = data;
        })
        .catch(error => {
          console.error('Une erreur s\'est produite : ', error);
        });
       } if(sub.innerText.trim() === 'Introduction python') {
        fetch('/learn')
        .then(response => response.text())
        .then(data => {
          // Sélectionnez la balise cible dans laquelle vous souhaitez intégrer le contenu
          const section = document.querySelector('section');

          // Mettez à jour le contenu de la balise avec le contenu chargé du fichier externe
          section.innerHTML = data;
          
        })
        .catch(error => {
          console.error('Une erreur s\'est produite : ', error);
        });
      } if (sub.innerText.trim() === 'Python numbers '){
        fetch('/documentation')
        .then(response => response.text())
        .then(data => {
          // Sélectionnez la balise cible dans laquelle vous souhaitez intégrer le contenu
          const section = document.querySelector('section');

          // Mettez à jour le contenu de la balise avec le contenu chargé du fichier externe
          section.innerHTML = data;
          initializeVariables();
          attachEventHandlers();
          displayInitialThree();
          updateProgressionCount();
          attachEventHandlers()
        })
        .catch(error => {
          console.error('Une erreur s\'est produite : ', error);
        });
    }else{
    
      // Réaffectez le contenu initial dans la condition else
      const section = document.querySelector('section');
      section.innerHTML = contenuInitial;
    }
  });
});
   
//  fonction pour réduire les sections en affichant les lettres abrégés

  // Récupération des éléments HTML nécessaires
const reduce = document.getElementById('reduce-icon');
const barsIcon = document.getElementById('bars-icon');
const ul=document.querySelector('.list-description')
const sidebar = document.querySelectorAll('.visib');
const listIcon = document.querySelectorAll('.list-description .icn');
const item=document.querySelectorAll('.items')
const closed=document.querySelectorAll('.item-closed')
const li=document.querySelectorAll('.items-content li')
const iconsDescription=document.querySelectorAll('.list-icons')




// Fonction pour masquer l'image et afficher la barre
reduce.addEventListener('click', function() {
    reduce.style.display = 'none';
 
    barsIcon.style.display="flex";
        barsIcon.style.flexDirection='column'
        // barsIcon.style.alignItems='center'
        barsIcon.style.justifyContent='center'
    sidebar.forEach((vis)=>{
      vis.style.display = 'none';
    })
  //   pythonDetail.forEach(elem => {
  //     elem.removeEventListene('mouseover',
         
  //         applyStylesOnPythonDetail()
         
  //     );
  //   })
  //   listIcons.forEach(element => {
  //     element.removeEventListener('mouseover', 
  //         applyStyles()
          
  
  //     );
  // });
   iconsDescription.forEach(icon=>{
    icon.style.marginTop='10px';
    icon.style.display='flex';
    icon.style.flexDirection='column';
    icon.style.alignItems = 'center';
    icon.style.marginRight='0';
    icon.style.transition='none';
    icon.querySelectorAll('i').forEach(icone=>{
      icone.style.padding="5px 0"
    })
   })
  //  iconsDescription.querySelectorAll('i').forEach(icone=>{
  //   icone.style.padding='5px 0'
  //  })
    item.forEach(icon => {
        icon.style.padding='10px 20px';
        icon.style.display="flex";
        icon.style.flexDirection='column';
        icon.style.alignItems='center';
        icon.style.justifyContent='center';
        
         })
         document.querySelectorAll('.hiddenIndicator').forEach(hiden=>{
          hiden.classList.add('displ')
         })
         li.forEach(elem=>{
          elem.style.display='flex'
          elem.style.flexDirection='column'
          elem.style.justifyContent='space-between'

         })
         
document.querySelector('aside').classList.add('hide-before')
document.querySelector('aside').classList.remove('no-hide')
 

  
    closed.forEach(cl=>{
      cl.style.width='auto'
    })

    document.querySelectorAll('.fa-angle-right').forEach(right=>
      {
      right.style.setProperty('display','none','important')
    })
    document.querySelectorAll('.fa-award').forEach(award =>{
      award.style.setProperty('display','none','important')
    })
    document.querySelectorAll('.fa-lock').forEach(lock =>{
      lock.style.setProperty('display','none','important')
    })
    document.querySelector('.page').style.gridTemplateColumns='auto 1fr'
});

// Fonction pour masquer la barre et afficher l'image
barsIcon.addEventListener('click', function() {
    barsIcon.style.display='none';
    reduce.style.display = 'block';
    sidebar.forEach((vis)=>{
      vis.style.display = 'block';
    })
   document.querySelectorAll('.hiddenIndicator').forEach(hiden=>{
    hiden.classList.remove('displ')
   })
   iconsDescription.forEach(icon=>{
    icon.style.marginTop='0px';
    icon.style.display='flex';
    icon.style.flexWrap='nowrap'
    icon.style.flexDirection='row';
    icon.style.alignItems = 'center';
    icon.style.marginRight='30px';
    icon.style.transition='transform 0.3s ease';
    icon.querySelectorAll('i').forEach(icone=>{
      icone.style.padding="0 5px"
    })

   })
    item.forEach(icon => {
      icon.style.padding='0'
      icon.style.display="flex";
      icon.style.flexDirection='row';
      icon.style.alignItems='center';
      icon.style.justifyContent='flex-start';
  });
  li.forEach(elem=>{
    elem.style.display='flex'
    elem.style.flexDirection='row'
    elem.style.justifyContent='space-between'

   })
  document.querySelector('aside').classList.remove('hide-before')
document.querySelector('aside').classList.add('no-hide');

  document.querySelector('.hiddenIndicator').classList.remove('displ')
  closed.forEach(cl=>{
    cl.style.width='250px'
  })
  document.querySelectorAll('.fa-angle-right').forEach(right=>
    {
    right.style.setProperty('display','flex','important')
  })
  document.querySelectorAll('.fa-award').forEach(award =>{
    award.style.setProperty('display','flex','important')
  })
  document.querySelectorAll('.fa-lock').forEach(lock =>{
    lock.style.setProperty('display','flex','important')
  })
    document.querySelector('.page').style.gridTemplateColumns='2.1fr 5fr'
   
});







// Événement de clic sur l'icône de réduction
// document.getElementById('reduce-icon').addEventListener('click', reduceSections);
// document.querySelector('.sidebar-arrow').addEventListener('click',restoreSections);


// Événement de hover pour afficher les full text


// Déclaration de la variable pour garder une trace du nombre total de sous-sections visitées
let sousSectionsVisitees = 0;

// Ajoutez un écouteur d'événement à toutes les sous-sections
document.querySelectorAll('.item-section-content span a').forEach(item => {
    item.addEventListener('click', function() {
        // Trouvez la section parente
        let parentSection = this.closest('.item-sec');
        
        // Trouvez toutes les sous-sections de la section parente
        let totalSousSections = parentSection.querySelectorAll('.item-section-content').length;

        // Incrémentez le nombre de sous-sections visitées pour cette section
        sousSectionsVisitees++;

        // Vérifiez si toutes les sous-sections ont été visitées pour cette section
        if (sousSectionsVisitees === totalSousSections) {
            // Trouvez la section suivante à débloquer
            let nextSection = parentSection.nextElementSibling.querySelector('.item-section');
            
            // Vérifiez si la prochaine section existe et si elle est bloquée
            if (nextSection && nextSection.classList.contains('bloque')) {
                // Débloquez la prochaine section en supprimant la classe 'bloque'
                nextSection.classList.remove('bloque');
                
                // Réinitialisez le compteur pour la prochaine section
                sousSectionsVisitees = 0;
            }
        }
    });
});



let currenIndex = 0;
let indexSection=0;
// Fonction pour mettre à jour la barre de progression lors du clic sur une sous-section
// function updateProgressOnClick() {
//   // Sélectionne tous les éléments .item-content a
//   var itemContentLinks = document.querySelectorAll('.items-content .item-content a');

//   // Parcours chaque élément .item-content a

  
//   itemContentLinks.forEach(function(link) {
//       // Ajoute un gestionnaire d'événements pour le clic
//       link.addEventListener('click', function() {
//           // Récupère l'élément parent .items-content
//           let itemContentParent = this.closest('.items-content');
//           // Récupère l'ID de  la section parente de l'élément .items-content
//           let sectionId = itemContentParent.parentElement.querySelector('a').id;

//           console.log(sectionId)
//           // Compte le nombre total de sous-sections dans cette section
//           let sect=document.getElementById(sectionId)
//           let itemContentElements = sect.parentElement.querySelectorAll( '.item-content');
//           console.log(itemContentElements)
//           let clickedIndex = Array.from(itemContentElements).indexOf(this.parentElement.parentElement);
//           console.log(clickedIndex)
//           let  progress = (clickedIndex + 1) / itemContentElements.length * 100;
//           // Sélectionne la barre de progression de cette section
//           let section=document.getElementById(sectionId)
//           console.log(section)

//           let progressBar = document.querySelector('.progress-bar .progress');
//           console.log(progressBar)
//           // Met à jour les styles de la barre de progression
//           progressBar.style.width = progress + '%';
//           progressBar.style.backgroundColor='#241d60';
//           progressBar.style.height='4px'
//       });
//   });
// }

// Appelle la fonction pour mettre à jour la barre de progression lors du clic sur une sous-section
// updateProgressOnClick();
let totalCompleted = 0; // Pour suivre le nombre total de contenus complétés
// Le nombre total de contenus (12 + 7)

function initialeVariables() {
  contentLinks = document.querySelectorAll('.menu-content .contentt');
  progressionCount = document.getElementById('progression-count');
  progressBar = document.querySelector('.progress-bar .progress');
  let sectionLecture=document.querySelectorAll('.item-sec')
  let lectureSection=Array.from(sectionLecture)
  
  lecture = lectureSection[indexSection].querySelectorAll('.content');
  console.log(indexSection)
   // Mettre à jour cette ligne pour obtenir tous les contenus
}

function updateProgressionCount() {
  const completedContents = document.querySelectorAll('.menu-content .contentt.completed');
  const completedCount = completedContents.length + totalCompleted;
  progressionCount.textContent = completedCount;

  const progressPercentage = (completedCount / lecture.length) * 100;
  progressBar.style.width = progressPercentage + '%';
}

function markAsCompleted(id) {
  const contentItem = document.getElementById(id).parentElement;
  console.log(contentItem)
  if (contentItem && !contentItem.classList.contains('completed')) {
    contentItem.classList.add('completed');
    updateProgressionCount();
  }
}

function attachEvent() {
  document.querySelectorAll('.menu-content .contentt a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      markAsCompleted(link.id);
    });
  });
}


  initialeVariables(); // Initialiser les variables au chargement du DOM
  attachEvent();
  updateProgressionCount(); // Mettre à jour la barre de progression initialement


right.addEventListener('click', e => {
  e.preventDefault();
  indexCurrent = 0;
  let h1Text = document.querySelector('.section h1');
  console.log(h1Text);

  let currentIndex = -1;

  for (let i = 0; i < sectionMain.length; i++) {
    let h1 = sectionMain[i];
    if (h1 && h1.textContent.trim() === h1Text.textContent.trim()) {
      currentIndex = i;
      let nextSibling = sectionMain[i].parentElement.nextElementSibling;
      
      if (nextSibling) {

        currenIndex++;
        let subse = nextSibling.querySelectorAll('.item-content');

        console.log(subse.length);

        if (currenIndex > 0 && currenIndex < subse.length) {
          sousSection.querySelector('.lecture h2').innerText = subse[currenIndex].querySelector('.python-detail a').innerText.trim();
        document.querySelectorAll('.python-detail').forEach(course =>{
            course.classList.remove('actif')
            course.classList.add('gris')
            course.querySelector('a').classList.add('non-actif')
            course.querySelector('i').classList.add('.gris')
          })
          subse[currenIndex].querySelector('.python-detail').classList.add('actif')
          subse[currenIndex].querySelector(' .python-detail').classList.remove('gris')
          subse[currenIndex].querySelector(' .python-detail').querySelector('a').classList.remove('non-actif')
          subse[currenIndex].querySelector(' .python-detail').querySelector('i').classList.add('actif')

          if (currenIndex === subse.length - 1) {
            sousSection.querySelector('.lecture .righter i ').style.color = '#b6b2b2';
            sousSection.querySelector('.lecture .left i ').style.color='#241d60';
            sousSection.querySelector('.lecture .righter').classList.add('prev');
            sousSection.querySelector('.lecture .left').classList.remove('prev'); 
          }
        else{
          sousSection.querySelector('.lecture .righter i ').style.color='#241d60';
           sousSection.querySelector('.lecture .left i ').style.color='#241d60';
           sousSection.querySelector('.lecture .left').classList.remove('prev')  
           sousSection.querySelector('.lecture .righter').classList.remove('prev')  
       }

          if (subse[currenIndex].querySelector('a').innerText.trim() === 'Coding') {
            console.log(h1Text.innerText);
            console.log(subse[currenIndex].querySelector('a'));
            // Conserver le nombre de contenus complétés
            totalCompleted += document.querySelectorAll('.menu-content .contentt.completed').length;
            fetch('/documentation')
              .then(response => response.text())
              .then(data => {
                const section = document.querySelector('section');
                section.innerHTML = data;
                initialeVariables()
                initializeVariables();
                attachEvent()
                attachEventHandlers();
                displayInitialThree();
                updateProgressionCount();
                
                clicButton();
               
              })
              .catch(error => {
                console.error('Une erreur s\'est produite : ', error);
              });
            }
               else if (subse[currenIndex].querySelector('a').innerText.trim() === 'Variables'){
                totalCompleted += document.querySelectorAll('.menu-content .contentt.completed').length;
                fetch('/variable')
                .then(response => response.text())
                .then(data => {
                  const section = document.querySelector('section');
                  section.innerHTML = data;
                  initialeVariables()
                  initializeVariables();
                  attachEvent()
                  attachEventHandlers();
                  displayInitialThree();
                  updateProgressionCount();
                  clicButton();
                })
                .catch(error => {
                  console.error('Une erreur s\'est produite : ', error);
                });
              }
              else if (subse[currenIndex].querySelector('a').innerText.trim() === 'python Install') {
                console.log(h1Text.innerText);
                console.log(subse[currenIndex].querySelector('a'));
                // Conserver le nombre de contenus complétés
                totalCompleted += document.querySelectorAll('.menu-content .contentt.completed').length;
                fetch('/install')
                  .then(response => response.text())
                  .then(data => {
                    const section = document.querySelector('section');
                    section.innerHTML = data;
                    initialeVariables()
                    initializeVariables();
                    attachEvent()
                    attachEventHandlers();
                    displayInitialThree();
                    updateProgressionCount();
                    clicButton();
                  })
                  .catch(error => {
                    console.error('Une erreur s\'est produite : ', error);
                  });
              }
              else if (subse[currenIndex].querySelector('a').innerText.trim() === 'loop') {
                console.log(h1Text.innerText);
                console.log(subse[currenIndex].querySelector('a'));
                // Conserver le nombre de contenus complétés
                totalCompleted += document.querySelectorAll('.menu-content .contentt.completed').length;
                fetch('/loop')
                  .then(response => response.text())
                  .then(data => {
                    const section = document.querySelector('section');
                    section.innerHTML = data;
                    initialeVariables()
                    initializeVariables();
                    attachEvent()
                    attachEventHandlers();
                    displayInitialThree();
                    updateProgressionCount();
                    clicButton();
                  })
                  .catch(error => {
                    console.error('Une erreur s\'est produite : ', error);
                  });
                
          } 
          else if (subse[currenIndex].querySelector('a').innerText.trim() === 'Python list') {
            console.log(h1Text.innerText);
            console.log(subse[currenIndex].querySelector('a'));
            // Conserver le nombre de contenus complétés
            totalCompleted += document.querySelectorAll('.menu-content .contentt.completed').length;
            fetch('/list')
              .then(response => response.text())
              .then(data => {
                const section = document.querySelector('section');
                section.innerHTML = data;
                initialeVariables()
                initializeVariables();
                attachEvent()
                attachEventHandlers();
                displayInitialThree();
                updateProgressionCount();
                clicButton();
              })
              .catch(error => {
                console.error('Une erreur s\'est produite : ', error);
              });
            }
            else if (subse[currenIndex].querySelector('a').innerText.trim() === 'Python tuple') {
              console.log(h1Text.innerText);
              console.log(subse[currenIndex].querySelector('a'));
              // Conserver le nombre de contenus complétés
              totalCompleted += document.querySelectorAll('.menu-content .contentt.completed').length;
              fetch('/tuple')
                .then(response => response.text())
                .then(data => {
                  const section = document.querySelector('section');
                  section.innerHTML = data;
                  initialeVariables()
                  initializeVariables();
                  attachEvent()
                  attachEventHandlers();
                  displayInitialThree();
                  updateProgressionCount();
                  clicButton();
                })
                .catch(error => {
                  console.error('Une erreur s\'est produite : ', error);
                });
              }
              else if (subse[currenIndex].querySelector('a').innerText.trim() === 'Python string') {
                console.log(h1Text.innerText);
                console.log(subse[currenIndex].querySelector('a'));
                // Conserver le nombre de contenus complétés
                totalCompleted += document.querySelectorAll('.menu-content .contentt.completed').length;
                fetch('/tuple')
                  .then(response => response.text())
                  .then(data => {
                    const section = document.querySelector('section');
                    section.innerHTML = data;
                    initialeVariables()
                    initializeVariables();
                    attachEvent()
                    attachEventHandlers();
                    displayInitialThree();
                    updateProgressionCount();
                    clicButton();
                  })
                  .catch(error => {
                    console.error('Une erreur s\'est produite : ', error);
                  });
                }
                else if (subse[currenIndex].querySelector('a').innerText.trim() === 'Python Dictionary') {
                  console.log(h1Text.innerText);
                  console.log(subse[currenIndex].querySelector('a'));
                  // Conserver le nombre de contenus complétés
                  totalCompleted += document.querySelectorAll('.menu-content .contentt.completed').length;
                  fetch('/tuple')
                    .then(response => response.text())
                    .then(data => {
                      const section = document.querySelector('section');
                      section.innerHTML = data;
                      initialeVariables()
                      initializeVariables();
                      attachEvent()
                      attachEventHandlers();
                      displayInitialThree();
                      updateProgressionCount();
                      clicButton();
                    })
                    .catch(error => {
                      console.error('Une erreur s\'est produite : ', error);
                    });
                  }
                
          else {
            totalCompleted += document.querySelectorAll('.menu-content .contentt.completed').length;
            
            const section = document.querySelector('section');
            section.innerHTML = contenuInitial;

            // Conserver le nombre de contenus complétés
           
            initialeVariables()
            attachEvent()
            initializeVariables();
            attachEventHandlers();
            displayInitialThree();
            updateProgressionCount();
            clicButton();
          }
        }
      }
    }
  }
});

        left.addEventListener('click',e=>{
          e.preventDefault()
          let h1Text = document.querySelector('.section h1');
          console.log(h1Text)
          index=1;
         
          let currentIndex = -1;

          for (let i = 0; i < sectionMain.length; i++) {
            let h1 = sectionMain[i]
            if (h1 && h1.textContent.trim() === h1Text.textContent.trim()) {
            
              
             
              currentIndex = i
              let nextSibling = sectionMain[i].parentElement.nextElementSibling;
              
              if (nextSibling) {
              
                
                
          currenIndex--;
         
          let subse = nextSibling.querySelectorAll('.item-content');
  
          console.log(subse.length)
         
          if (currenIndex >=0  && currenIndex < subse.length ) {
            
            
           
             
              sousSection.querySelector('.lecture h2').innerText = subse[currenIndex].querySelector(' .python-detail a').innerText.trim();
              document.querySelectorAll('.python-detail').forEach(course =>{
                course.classList.remove('actif')
                course.classList.add('gris')
                course.querySelector('a').classList.add('non-actif')
                course.querySelector('i').classList.add('.gris')
              })
              subse[currenIndex].querySelector('.python-detail').classList.add('actif')
              subse[currenIndex].querySelector(' .python-detail').classList.remove('gris')
              subse[currenIndex].querySelector(' .python-detail').querySelector('a').classList.remove('non-actif')
              subse[currenIndex].querySelector(' .python-detail').querySelector('i').classList.add('actif')
              console.log (subse[currenIndex].querySelector('.python-detail a'))
                   
              
              if(currenIndex===0 && currenIndex===subse.length-1){
                // sousSection.querySelector('.lecture .righter i ').style.color='#241d60';
                  sousSection.querySelector('.lecture .left i ').style.color='  #b6b2b2';
                  sousSection.querySelector('.lecture .left').classList.add('prev');
                    sousSection.querySelector('.lecture .righter i ').style.color='#b6b2b2';
                    sousSection.querySelector('.lecture .righter').classList.add('prev') 
                }
              
                else if(currenIndex===0 && currenIndex!==subse.length-1){
              
                    sousSection.querySelector('.lecture .left i ').style.color='  #b6b2b2';
                    sousSection.querySelector('.lecture .left').classList.add('prev') 
                    sousSection.querySelector('.lecture .righter i ').style.color='#241d60';
                    sousSection.querySelector('.lecture .righter').classList.remove('prev')     
                  }
                else{
                  sousSection.querySelector('.lecture .righter i ').style.color='#241d60';
                   sousSection.querySelector('.lecture .left i ').style.color='#241d60';
                   sousSection.querySelector('.lecture .left').classList.remove('prev')  
                   sousSection.querySelector('.lecture .righter').classList.remove('prev')  
               }
          // console.log(subse[currenIndex].querySelector('.python-detail a'))
          if( subse[currenIndex].querySelector('.python-detail a').innerText.trim()==='Introduction python'){
           

            fetch('/learn')
            .then(response => response.text())
            .then(data => {
              // Sélectionnez la balise cible dans laquelle vous souhaitez intégrer le contenu
              const section = document.querySelector('section');
    
              // Mettez à jour le contenu de la balise avec le contenu chargé du fichier externe
              section.innerHTML = data;
              initializeVariables();
              attachEventHandlers();
              displayInitialThree();
              updateProgressionCount();
              clicButton()

            })
            .catch(error => {
              console.error('Une erreur s\'est produite : ', error);
            });
            
          }else {
            const section = document.querySelector('section');
          section.innerHTML = contenuInitial;
          initializeVariables();
          attachEventHandlers();
          displayInitialThree();
          updateProgressionCount();
          clicButton()
          }
        }
      }   
      }
    }
      })

// récupérer les contents de chaque sous-section pour calculer le progress-bar;




let x=document.querySelector('.progress-bar .progress');
console.log(x)

document.querySelector('.lecture').addEventListener('click',e=>{
  e.preventDefault()
})
let indexCurrent = 0;

function initializeVariables() {
    contentLinks = document.querySelectorAll('.contentt');
    righterButton = document.querySelector('.container-menu .right');
    leftButton = document.querySelector('.container-menu .left');
}

function attachEventHandlers() {
    righterButton.addEventListener('click', function(event) {
        event.preventDefault();
        displayNextThree();
    });
    leftButton.addEventListener('click', function(event) {
        event.preventDefault();
        displayPreviousThree();
    });
}

function displayInitialThree() {
    contentLinks.forEach(link => link.style.display = 'none');
    for (let i = 0; i < 3 && i < contentLinks.length; i++) {
        contentLinks[i].style.display = 'block';
    }
}

function addSlideOutLeftAnimation(element) {
    element.classList.add('slide-out-left');
    element.addEventListener('animationend', function() {
        element.classList.remove('slide-out-left');
        element.style.display = 'none';
    }, { once: true });
}

function addSlideInRightAnimation(element) {
    element.style.display = 'block';
    element.classList.add('slide-in-right');
    element.addEventListener('animationend', function() {
        element.classList.remove('slide-in-right');
    }, { once: true });
}

function addSlideOutRightAnimation(element) {
    element.classList.add('slide-out-right');
    element.addEventListener('animationend', function() {
        element.classList.remove('slide-out-right');
        element.style.display = 'none';
    }, { once: true });
}

function addSlideInLeftAnimation(element) {
    element.style.display = 'block';
    element.classList.add('slide-in-left');
    element.addEventListener('animationend', function() {
        element.classList.remove('slide-in-left');
    }, { once: true });
}

 
function displayNextThree() {
  let totalElements = contentLinks.length;

  // Initialiser indexCurrent à 3 si ce n'est pas déjà le cas
  if (indexCurrent === 0) {
      indexCurrent = 3;
  }

  // Vérifier si on a atteint la fin du tableau
  if (indexCurrent >= totalElements) {
      return; // Sortir de la fonction pour arrêter l'animation
  }

  // Calculer l'indice de fin pour les nouveaux éléments
  let end = Math.min(indexCurrent + 3, totalElements);

  // Cacher les éléments précédents
  if (indexCurrent - 3 >= 0) {
      for (let i = indexCurrent - 3; i < indexCurrent; i++) {
          if (contentLinks[i]) {
              addSlideOutLeftAnimation(contentLinks[i]);
              contentLinks[i].style.display = 'none'; // Masquer l'élément après l'animation
          }
      }
  }

  // Faire glisser les nouveaux éléments vers la droite et les afficher
  for (let i = indexCurrent; i < end; i++) {
      if (contentLinks[i]) {
          contentLinks[i].style.display = 'block'; // Afficher l'élément avant l'animation
          addSlideInRightAnimation(contentLinks[i]);
      }
  }

  // Mettre à jour l'index actuel pour le prochain appel
  indexCurrent = end;
}












function displayPreviousThree() {
    if (indexCurrent === 0) {
        return; // Prevent moving to previous if we are at the start
    }

    for (let i = indexCurrent; i < indexCurrent + 3; i++) {
        if (contentLinks[i]) {
            addSlideOutRightAnimation(contentLinks[i]);
        }
    }

    indexCurrent -= 3;

    if (indexCurrent < 0) {
        indexCurrent = 0;
    }

    for (let i = indexCurrent; i < indexCurrent + 3 && i < contentLinks.length; i++) {
        addSlideInLeftAnimation(contentLinks[i]);
    }
}

// Initialisation
initializeVariables();
displayInitialThree();
attachEventHandlers();


//  clic sur le bouton next au dessus de la page modifier la sous-section prochain de chaque section
// Initialisation de l'index à 0
// Initialisation de l'index à 0


function clicButton(){
    // Récupérer tous les éléments li avec la classe .contentt
    let contentItems = document.querySelectorAll('.contentt a');

    // Indice de l'élément actuellement affiché
    let index = 0;

    // Cacher tous les éléments sauf le premier
    for (let i = 1; i < contentItems.length; i++) {
        contentItems[i].classList.remove('actives');
        contentItems[i].querySelector('.clak').classList.remove('bold')
        contentItems[i].querySelector('.act').classList.remove('activated')
        
    }

    // Ajouter un gestionnaire d'événement au bouton "Next"
    document.querySelector('button').addEventListener('click', function() {
        // Masquer l'élément actuellement affiché
        contentItems[index].classList.remove('actives');
        contentItems[index].classList.add('question');
        contentItems[index].querySelector('.clak span').classList.remove('bold')
        contentItems[index].querySelector('.clak span').classList.add('non-bold')
        contentItems[index].querySelector('.act').classList.remove('activated')
        contentItems[index].querySelector('.act').classList.add('title-min')


        // Passer à l'élément suivant
        index++
        if (index >= contentItems.length) {
          index=0
          contentItems[index].classList.add('actives');
          contentItems[index].classList.remove('question');
          contentItems[index].querySelector('.clak span').classList.add('bold')
          contentItems[index].querySelector('.clak span').classList.remove('non-bold')
          contentItems[index].querySelector('.act').classList.add('activated')
          contentItems[index].querySelector('.act').classList.remove('title-min')
      }

        // Afficher l'élément suivant
        contentItems[index].classList.add('actives');
        contentItems[index].classList.remove('question');
        contentItems[index].querySelector('.clak span').classList.add('bold')
        contentItems[index].querySelector('.clak span').classList.remove('non-bold')
        contentItems[index].querySelector('.act').classList.add('activated')
        contentItems[index].querySelector('.act').classList.remove('title-min')
    });
}

 
  clicButton()

