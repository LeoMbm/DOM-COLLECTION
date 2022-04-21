const body = document.body

document.body.style.backgroundColor = '#1267F0';


//Je crée ma première div qui est mon container et qui sera dans ma section

//Je crée ma seconde div qui est dans mon container 


//Je crée ma troisième div qui est dans ma div card


// Quatrième div qui est aussi dans ma div card


// Ici je vai







let collection = [{
    
    

        author: 'Ninho',
        title: 'Binks To Binks 1',
        year: '2016',
        genre: 'Rap',
        language: 'FR',
        producer: 'LVDR',
        type: 'Music',
        picture : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Ninho_karlexander.jpg/640px-Ninho_karlexander.jpg'
},


                {
    

        author: 'Cousin Stizz',
        title: 'LBS',
        year: '2022',
        genre: 'Rap',
        language: 'EN',
        producer: 'Halfway, Michael Seven & Snapz',
        type: 'Music',
        picture : 'https://media.resources.festicket.com/www/artists/cousin-stizz.jpg'
        
        

},
{
    
    
    author: 'Comethazine',
    title: 'Like Dat',
    year: '2022',
    genre: 'Rap',
    language: 'EN',
    producer: 'Baby Plugg, BabyPluto, Beatsbyjuko & Comethazine',
    type: 'Music',
    picture : 'https://www.inkedmag.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc2NDAyNTkwNDk2NDY2MDkz/comethazine.jpg'



},
{
    

    author: 'Patrick Kack-Brice',
    title: 'Killer Game',
    year: '2021',
    genre: 'Horror/Thriller',
    language: 'EN',
    type: 'Movie',
    picture : 'https://fr.web.img6.acsta.net/pictures/21/09/30/15/42/4585289.jpg'



},
{
    

    author: 'Antoine Fugua',
    title: 'Equalizer',
    year: '2014',   
    genre: 'Action/Thriller',
    language: 'EN',
    type: 'Movie',
    picture : 'https://imgsrc.cineserie.com/2016/08/14090.jpg?ver=1'
    



    
},
{
    
    

    author: 'Martin Scorsese',
    title: 'Shutter Island',
    year: '2014',
    genre: 'Psycho/Thriller',
    language: 'EN',
    type: 'Movie',
    picture : 'https://fr.web.img4.acsta.net/medias/nmedia/18/69/96/84/19151192.jpg'



},
{
    

    author: 'Tony Ayres',
    title: 'Clickbait',
    year: '2021',
    genre: 'Action/Thriller',
    language: 'EN',
    type: 'Series',
    picture : 'https://fr.web.img3.acsta.net/pictures/21/07/21/20/12/1875608.jpg'



},
{
    

    author: 'David E. Kelley & Melissa James Gibson',
    title: 'Anatomy Of A Scandal',
    year: '2022',
    genre: 'Action/Thriller',
    language: 'EN',
    type: 'Series',
    picture : 'https://fr.web.img6.acsta.net/pictures/22/03/18/08/49/3762635.jpg'



},
{
    

    author: 'Aaron Martin',
    title: 'Slasher',
    year: '2016',
    genre: 'Horror/Thriller',
    language: 'EN',
    type: 'Series',
    picture : 'https://fr.web.img6.acsta.net/pictures/16/02/23/15/43/145751.jpg'



},
{
    

    author: 'Raven Software & Infinity Ward',
    title: 'Call of Duty Warzone',
    year: '2020',
    genre: 'FPS',
    language: 'EN',
    type: 'Game',
    picture : 'https://www.dexerto.fr/wp-content/uploads/sites/2/2022/02/11/saison-2-warzone-changements-majeurs.jpg'



},


]

const section = document.querySelector('#home');
const container = document.createElement('div'); 
container.className = 'container'

for (const item of collection){
    



    const card = document.createElement('div');
    card.className = 'card'


    const card_preview = document.createElement('div');
    card_preview.className = 'card-preview'
    const pic =  document.createElement('img')
    pic.className = 'iframe'
    pic.src = item.picture
    const release = document.createElement('figcaption');
    release.innerText = item.year
    const type = document.createElement('p')
    type.className = 'type'
    type.innerText = item.type
    
    
    const card_info = document.createElement('div');
    card_info.className = 'card-info'
    const artist = document.createElement('h1')
    artist.innerText = item.author;
    const title = document.createElement('h2')
    title.innerText = item.title;


    const genre = document.createElement('p')
    genre.className ='Genre'
    genre.innerText = item.genre

    
    
    
    
    console.log(item)
    
    
    
    
    
    section.appendChild(container);
    container.appendChild(card)
    card.appendChild(card_preview)
    card.appendChild(card_info)
    card_preview.appendChild(pic)
    card_preview.appendChild(release)
    card_info.appendChild(type)
    card_info.appendChild(artist);
    card_info.appendChild(title);
    card_info.appendChild(genre)
}








function test(){


// Creer un element et ecrire dedans
const div = document.createElement('div');
div.innerText = "Hello World"
body.append('div');
//
}







// const preview = document.getElementById('card-preview');
// document.preview.style.backgroundColor = '#A36E00';








