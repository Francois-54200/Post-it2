class Post_it {
    x;
    y;
    largeur;
    hauteur;
    Couleurdefond;
    couleurtexte;
    texte;
    id;
     
    constructor(x, y, largeur, hauteur, Couleurdefond, Couleurtexte, texte, id) {
        this.x = x;
        this.y = y;        
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.Couleurdefond = Couleurdefond;
        this.Couleurtexte = Couleurtexte;
        this.texte = texte;
        this.id = id;
    }

    AffichPostit() {
        let monElem = document.getElementById(this.id)
        if(monElem===null) {
            monElem = document.createElement('div')
            monElem.id = this.id
        }    
        monElem.style.width = this.largeur+'px'
        monElem.style.height = this.hauteur+'px'
        monElem.style.position = 'fixed'
        monElem.style.left = this.x+'px'
        monElem.style.top = this.y+'px'
        monElem.style.color = this.couleurtexte
        monElem.style.backgroundColor = this.Couleurdefond
        document.getElementById('postit').appendChild(monElem)
        monElem.innerHTML = this.texte

        monElem.style.overflowWrap= "break-word"

        let mesBout=document.createElement('div');
        mesBout.className = 'Bout'
        monElem.appendChild(mesBout)
        monElem.addEventListener('click',(e)=>{
            postitdep=false
        })
        document.getElementById('postit').appendChild(monElem)

        //Définition des boutons

        let monBoutonDep=document.createElement('i');
        monBoutonDep.classList.add('fas', 'fa-arrows-alt')
        monBoutonDep.addEventListener('click',(e)=>{ 
            postitdep=!postitdep
            numPost_it=this.id
            e.stopPropagation()
        })
        mesBout.appendChild(monBoutonDep)

        let monBoutonEdit=document.createElement('i');
        monBoutonEdit.classList.add('fas', 'fa-edit')
        monBoutonEdit.addEventListener('click',(e)=>{ 
            modifText=!modifText
            numPost_it=this.id
            e.stopPropagation()
        })
        mesBout.appendChild(monBoutonEdit)

        let monBoutonExpand=document.createElement('i');
        monBoutonExpand.classList.add('fas', 'fa-expand-alt')
        monBoutonExpand.addEventListener('click',(e)=>{
            this.largeurInit=this.largeur
            this.hauteurInit=this.hauteur
            this.Xdepart=Xposition
            this.Ydepart=Yposition
            postitExp=!postitExp
            numPost_it=this.id
            e.stopPropagation()
        })
        mesBout.appendChild(monBoutonExpand)

        let monBoutonLevelUp=document.createElement('i');
        monBoutonLevelUp.classList.add('fas', 'fa-level-up-alt')
        mesBout.appendChild(monBoutonLevelUp)

        let monBoutonLevelDown=document.createElement('i');
        monBoutonLevelDown.classList.add('fas', 'fa-level-down-alt')
        mesBout.appendChild(monBoutonLevelDown)

        let monBoutonTrash=document.createElement('i');
        monBoutonTrash.classList.add('fas', 'fa-trash-alt')
        mesBout.appendChild(monBoutonTrash)
        
        
    }

    Bougepostit(newX, newY){  //pour deplacer le post it
        this.x = newX
        this.y = newY
    }
    
    modifText(newText){
        this.texte = newText
    }

    redimPostit(newLargeur, newHauteur){
        this.largeur = newLargeur
        this.hauteur = newHauteur
    }

    editText(newText){
        this.texte=newText
    }
}

    let modifText = false
    let postitdep=false
    let monPost_it
    let postitExp=false
    let Xposition
    let Yposition
    let TabPost_it=[]
    let numPost_it

function nouveauPost(){
    let monPost_it = new Post_it(200,200,100,100,'red', 'black', 'Salut', 'Ici')
    monPost_it.AffichPostit()

    let monPost_it2 = new Post_it(150,150,150,150,'purple', 'black', 'Hello', 'la')
    monPost_it2.AffichPostit()

    let monPost_it3 = new Post_it(50,50,200,200,'pink', 'black', 'Hola', 'yes')
    monPost_it3.AffichPostit()
}

window.addEventListener('load', ()=>{
    let chaine=readCookie("monPost_it")
    let TabTps=JSON.parse(chaine)
    //console.log(TabTps)
    for (let i in TabTps){
        TabPost_it.push (new Post_it(TabTps[i].x,TabTps[i].y, TabTps[i].largeur, TabTps[i].hauteur, TabTps[i].Couleurdefond, TabTps[i].Couleurtexte, TabTps[i].texte, TabTps[i].id))
        TabPost_it[TabPost_it.length-1].AffichPostit()
    }
    
    document.getElementById('Jaune').addEventListener('click',()=>{
        monPost_it = new Post_it(300,100,120,120,'yellow', 'black', 'Salut', TabPost_it.length+1)
        monPost_it.AffichPostit();
        TabPost_it.push(monPost_it);
    })
    document.getElementById('Orange').addEventListener('click',()=>{
        monPost_it = new Post_it(500,200,120,120,'Orange', 'black', 'Salut', TabPost_it.length+1)
        monPost_it.AffichPostit();
        TabPost_it.push(monPost_it);
    })
    document.getElementById('Blue').addEventListener('click',()=>{
        monPost_it = new Post_it(200,200,120,120,'#4ac5eb', 'black', 'Salut', TabPost_it.length+1)
        monPost_it.AffichPostit();
        TabPost_it.push(monPost_it);
    })

//Déplacement du post-it

        document.body.addEventListener('mousemove', (e)=>{
            Xposition = e.clientX
            Yposition = e.clientY
            if (postitdep){
                TabPost_it[numPost_it-1].Bougepostit(Xposition-50,Yposition-50);
                TabPost_it[numPost_it-1].AffichPostit();
                }
            if (postitExp){
                TabPost_it[numPost_it-1].redimPostit(TabPost_it[numPost_it-1].largeurInit+(e.clientX-TabPost_it[numPost_it-1].Xdepart), TabPost_it[numPost_it-1].hauteurInit+(e.clientY-TabPost_it[numPost_it-1].Ydepart))
                TabPost_it[numPost_it-1].AffichPostit()
            }
            })

})

document.body.addEventListener('keydown', (e) => {
    

    if(modifText){
    if(e.key=='Backspace'){
        TabPost_it[numPost_it-1].modifText(TabPost_it[numPost_it-1].texte.substr(0, TabPost_it[numPost_it-1].texte.length-1))
    }

    else if(e.key=="Enter"){
        TabPost_it[numPost_it-1].editText(TabPost_it[numPost_it-1].texte+'<br>')
    }
    
    else{
        TabPost_it[numPost_it-1].modifText(TabPost_it[numPost_it-1].texte+e.key)
    }

    TabPost_it[numPost_it-1].AffichPostit()
    console.log(e)
    }    
})


//Enregistrement de cookies
setInterval(sauvePostit, 500)
    function sauvePostit(){
        let chaine=JSON.stringify(TabPost_it) 
        //console.log(chaine)
            createCookie("monPost_it", chaine, 30)
    }

    function createCookie(name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    }
    
    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

/*
let monPost_it = new Post_it(200,200,100,100,'red', 'black', 'Salut', 'Ici')
monPost_it.AffichPostit()
monPost_it.Bougepostit(50,50)
monPost_it.AffichPostit()
monPost_it.modifText("Gaetan suce moi SALOPE")
monPost_it.AffichPostit()

let monPost_it2 = new Post_it(50,50,150,150,'purple', 'black', 'Hello', 'la')
monPost_it2.AffichPostit()
monPost_it2.Bougepostit(50,200)
monPost_it2.AffichPostit()

let monPost_it3 = new Post_it(50,50,200,200,'pink', 'black', 'Hola', 'yes')
monPost_it3.AffichPostit()
monPost_it3.Bougepostit(50,400)
monPost_it3.AffichPostit()
*/
