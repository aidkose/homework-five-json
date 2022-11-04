var GAMES = [
  {
    gameTitle: "Batman: Arkham City",
    gameThumb: "batman.jpg",
    gameShortDescription: "You play as Bruce Wayne AKA Batman.",
    gameDescription:
      "You play as Bruce Wayne AKA Batman, and you beat criminals senseless and then leave them out in the cold without medical attention for the span of an entire night. And you DEFINITELY don't kill anyone.",
    gameRating: "T",
    releaseDate: "October 18, 2011",
    developers: "Rocksteady Studios",
    publishers: "Warner Bros. Interactive Entertainment",
    engine: "Unreal Engine 3",
    genre: "Action/Adventure",
  },
  {
    gameTitle: "Battlefield 1",
    gameThumb: "battle.jpg",
    gameShortDescription: "A FPS set in WWI",
    gameDescription:
      "You play as a soldier during the first world war. There are multiple maps, each with the goal of controlling the most points until your team reaches 1000 points.",
    gameRating: "M",
    releaseDate: "October 21, 2016",
    developers: "DICE",
    publishers: "Electronic Arts (EA)",
    engine: "Frostbite 3",
    genre: "Multiplayer FPS",
  },
  {
    gameTitle: "Bloodborne",
    gameThumb: "bloodborne.jpg",
    gameShortDescription: "A video game set in a dystopian victorian setting.",
    gameDescription:
      "You play as a hunter of Yharnam, who is tasked with killing both beasts and men.",
    gameRating: "M",
    releaseDate: "March 24, 2015",
    developers: "FromSoftware",
    publishers: "Sony Computer Entertainment",
    engine: "Custom Bloodborne Engine",
    genre: "Single-player/Soulslike",
  },
  {
    gameTitle: "Darkest Dungeons",
    gameThumb: "darkest.jpg",
    gameShortDescription: "A dungeon crawler game.",
    gameDescription:
      "You send out a group of 4 adventurers to various dungeons to bring back gold, special items, and equipment while facing monsters and status effects.",
    gameRating: "T",
    releaseDate: "January 19, 2016",
    developers: "Red Hook Studios",
    publishers: "Red Hook Studios",
    engine: "Custom Red Hook Studios Engine",
    genre: "Single-player Dungeon Crawler",
  },
  {
    gameTitle: "Elden Ring",
    gameThumb: "elden.jpg",
    gameShortDescription: "A vast open world soulslike game.",
    gameDescription:
      "You play as a Tarnished One trying to reach the Erdtree, which is a capital of sorts, and to kill each lord in order to become the Elden Lord.",
    gameRating: "M",
    releaseDate: "February 25, 2022",
    developers: "FromSoftware",
    publishers: "Bandai Namco Entertainment",
    engine: "Custom Elden Ring Engine",
    genre: "Openworld Soulslike",
  },
  {
    gameTitle: "Metro Exodus",
    gameThumb: "metro.jpg",
    gameShortDescription:
      "A survival shooter set in a post-apocalyptic Russian Federation.",
    gameDescription:
      "You play as a Artyom, one of many people that now live underground in the metroway tunnels, and you are attempting to find a better life on the surface.",
    gameRating: "M",
    releaseDate: "February 15, 2019",
    developers: "4A Games",
    publishers: "Deep Silver",
    engine: "4A Engine",
    genre: "Open World Survival Shooter",
  },
  {
    gameTitle: "Total War: Warhammer II",
    gameThumb: "war.jpg",
    gameShortDescription:
      "You can play as one of many factions set in the Warhammer world.",
    gameDescription:
      "Each faction you can play as has an end goal that needs to be completed in order to win, whatever faction you choose, you will play against all the other factions. You need to complete goals, conquer lands, and hold resources to win.",
    gameRating: "M",
    releaseDate: "September 28, 2017",
    developers: "Creative Assembly",
    publishers: "Sega",
    engine: "Warscape Engine",
    genre: "Strategy/4X",
  },
  {
    gameTitle: "The Witcher 3: Wild Hunt",
    gameThumb: "witcher.jpg",
    gameShortDescription:
      "You play as Geralt of Rivia, a witcher who hunts monsters, and you are trying to find your adopted daughter.",
    gameDescription:
      "Geralt of Rivia is a witcher, a monster hunter of sorts. His adopted daughter, Ciri has not been seen in years, and the Wild Hunt, a dangerous group of barbarians are after her because of her unique bloodline.",
    gameRating: "M",
    releaseDate: "September 28, 2017",
    developers: "Creative Assembly",
    publishers: "Sega",
    engine: "Warscape Engine",
    genre: "Strategy/4X",
  },
];

function loadData() {
  $.each(GAMES, function (index, game) {
    $(
      "#app"
    ).append(`<div class="wrapper"><div id="${index}" class="game-holder">
    <h3>${game.gameTitle}</h3>
    <img src="images/games_thumb/${game.gameThumb}" alt="${game.gameTitle}" />
    <div class="descript">
      <div class="short">
        <span>Short Description: </span>${game.gameShortDescription}
      </div>
      <div class="long">
        <span>Long Description: </span>
        ${game.gameDescription}
      </div>
      <div class="rate"><span>ESRB Rating: </span>${game.gameRating}</div>
      <div class="date"><span>Release Date: </span>${game.releaseDate}</div>
      <div class="dev"><span>Developers: </span>${game.developers}</div>
      <div class="pub">
        <span>Publishers: </span>${game.publishers}
      </div>
      <div class="engine"><span>Game Engine: </span>${game.engine}</div>
      <div class="genre"><span>Genre: </span>${game.genre}</div>
    </div>
   </div>
  </div>`);
  });
}

$(document).ready(function () {
  loadData();
});
