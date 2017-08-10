var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: './poster/potter.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: './poster/lionking.jpg'
  },
  {
    id: 3,
    title: 'Incepcja',
    desc: 'Film o poziomach snu',
    img: './poster/inception.jpg'
  },
  {
    id: 4,
    title: 'Interstellar',
    desc: 'Film o podróżach w kosmosie',
    img: './poster/interstellar.jpg'
  },
  {
    id: 5,
    title: 'Ostatni Samurai',
    desc: 'Film o japońskich wojownikach',
    img: './poster/samurai.jpg'
  },
  {
    id: 6,
    title: 'Wyspa Tajemnic',
    desc: 'Film o agencie FBI badającym szpital psychiatryczny',
    img: './poster/island.jpg'
  },
  {
    id: 7,
    title: 'Dziennik zakrapiany rumem',
    desc: 'Film o redaktorze piszącym w Portoryko',
    img: './poster/rum.jpg'
  },
  {
    id: 8,
    title: 'Piraci z Karaibów',
    desc: 'Film o przygodach pirata Jacka Sparrowa',
    img: './poster/pirates.jpg'
  }
];

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function(){
    return (
      React.createElement('li', {key: this.props.movie.id},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDescription, {desc: this.props.movie.desc}),
        React.createElement('img', {src: this.props.movie.img})
      )
    )
  },
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function(){
    return React.createElement('h2', {}, this.props.title)
  },
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function(){
    return React.createElement('p', {}, this.props.desc)
  },
});

var MovieList = React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired,
  },
  render: function(){
    var movies = this.props.list.map(function(movie){
      return React.createElement(Movie, {movie: movie, key: movie.id})
    });
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, movies)
      )
    )
  },
});

var app = React.createElement(MovieList, {list: movies});
ReactDOM.render(app, document.getElementById('app'));