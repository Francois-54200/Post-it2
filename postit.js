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

        let mesBout=document.createElement('div');
        mesBout.className = 'Bout'
        monElem.appendChild(mesBout)
        document.getElementById('postit').appendChild(monElem)

        mesBout.innerHTML+='<i class="far fa-arrows-alt"><i class="fas fa-edit"><i class="fas fa-expand-alt"><i class="fas fa-level-up-alt"><i class="fas fa-level-down-alt"><i class="fas fa-trash-alt"></i>'
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
}


function nouveauPost(){
    let monPost_it = new Post_it(200,200,100,100,'red', 'black', 'Salut', 'Ici')
    monPost_it.AffichPostit()

    let monPost_it2 = new Post_it(150,150,150,150,'purple', 'black', 'Hello', 'la')
    monPost_it2.AffichPostit()

    let monPost_it3 = new Post_it(50,50,200,200,'pink', 'black', 'Hola', 'yes')
    monPost_it3.AffichPostit()
}

window.addEventListener('load', ()=>{
    document.getElementById('Jaune').addEventListener('click',()=>{
        let monPost_it = new Post_it(300,100,120,120,'yellow', 'black', 'Salut', 'Ici')
        monPost_it.AffichPostit()
    })
    document.getElementById('Orange').addEventListener('click',()=>{
        let monPost_it = new Post_it(500,200,120,120,'Orange', 'black', 'Salut', 'Ici')
        monPost_it.AffichPostit()
    })
    document.getElementById('Blue').addEventListener('click',()=>{
        let monPost_it = new Post_it(200,200,120,120,'#4ac5eb', 'black', 'Salut', 'Ici')
        monPost_it.AffichPostit()
    })
})


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