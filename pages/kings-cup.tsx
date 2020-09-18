import React from 'react'

const KingsCupGamePage: React.FC = (): JSX.Element => {
  const cardDice = () => {
    const myArray = [
      '<h1>Ace of Spades</h1> <h2>Waterfall with pinky fingers out</h2>' +
        '<img width="35%" src="/images/kings-cup/AS.png"/>' +
        '<br/> <p>Everyone starts chugging their drink. A player cannot stop drinking until the person to their right has stopped drinking.</p>',

      '<h1>Two of Spades</h1> <h2>Pick someone to drink without their hands</h2>' +
        '<img width="35%" src="/images/kings-cup/2S.png"/>' +
        '<br/> <p>The player who draws can choose another player who has to drink for a set amount of time.</p>',

      '<h1>Three of Spades</h1> <h2>Me make a toast and Me drink</h2>' +
        '<img width="35%" src="/images/kings-cup/3S.png"/>' +
        '<br/> <p>The player who draws must drink.</p>',

      '<h1>Four of Spades</h1> <h2>Touch the floor with your head</h2>' +
        '<img width="35%" src="/images/kings-cup/4S.png"/>' +
        '<br/> <p>Everyone at the table must reach down and touch the floor. The last player to do so must drink</p>',

      '<h1>Five of Spades</h1> <h2>Guys drink holding hands</h2>' +
        '<img width="35%" src="/images/kings-cup/5S.png"/>' +
        '<br/> <p>All of the male players must drink.</p>',

      '<h1>Six of Spades</h1> <h2>Chicks drink another persons drink</h2>' +
        '<img width="35%" src="/images/kings-cup/6S.png"/>' +
        '<br/> <p>All of the female players must drink.</p>',

      '<h1>Seven of Spades</h1> <h2>Put your feet up toward Heaven</h2>' +
        '<img width="35%" src="/images/kings-cup/7S.png"/>' +
        '<br/> <p>Everyone at the table must put both hands...or in this case feet.. in the air. The last player to do so must drink.</p>',

      '<h1>Eight of Spades</h1> <h2>Pick a mate to highfive you each drink</h2>' +
        '<img width="35%" src="/images/kings-cup/8S.png"/>' +
        '<br/> <p>The player who draws picks another player to be their mate. The mate must drink every time the original player does, and vice versa. This keeps going until another 8 is drawn.</p>',

      '<h1>Nine of Spades</h1> <h2>Bust a Rhyme to Rap music</h2>' +
        '<img width="35%" src="/images/kings-cup/9S.png"/>' +
        '<br/> <p>The player who draws must say one line. The other players have 5 seconds to say another line that rhymes with the original one. The first player who repeats or fails to think of a rhyme must drink.</p>',

      '<h1>Ten of Spades</h1> <h2>Categories of your choice</h2>' +
        '<img width="35%" src="/images/kings-cup/10S.png"/>' +
        '<br/> <p>The player who draws must declare a category and start with the first. The other players have 5 seconds to add to the category list. The first player who repeats or fails to think of one must drink.</p>',

      '<h1>Jack of Spades</h1> <h2>Reverse back the rotation</h2>' +
        '<img width="35%" src="/images/kings-cup/JS.png"/>' +
        '<br/> <p>The rotation of turns is reversed.</p>',

      '<h1>Queen of Spades</h1> <h2>Question Master</h2>' +
        '<img width="35%" src="/images/kings-cup/QS.png"/>' +
        '<br/> <p>The player who draws can ask questions. Whoever answers must drink. This continues until another player draws a Queen.</p>',

      '<h1>King of Spades</h1> <h2>Make a rule for one person</h2>' +
        '<img width="35%" src="/images/kings-cup/KS.png"/>' +
        '<br/> <p>The player who draws can make what ever rule they want for one person.</p>',
      //End Spades

      //Start of Hearts
      '<h1>Ace of Hearts</h1> <h2>Waterfall with drink 1+ inch away from mouth</h2>' +
        '<img width="35%" src="/images/kings-cup/AH.png"/>' +
        '<br/> <p>Everyone starts chugging their drink. A player cannot stop drinking until the person to their right has stopped drinking.</p>',

      '<h1>Two of Hearts</h1> <h2>Pick someone to drink</h2>' +
        '<img width="35%" src="/images/kings-cup/2H.png"/>' +
        '<br/> <p>The player who draws can choose another player who has to drink for a set amount of time.</p>',

      '<h1>Three of Hearts</h1> <h2>Me drink for 5 seconds</h2>' +
        '<img width="35%" src="/images/kings-cup/3H.png"/>' +
        '<br/> <p>The player who draws must drink.</p>',

      '<h1>Four of Hearts</h1> <h2>Touch the floor with your drink</h2>' +
        '<img width="35%" src="/images/kings-cup/4H.png"/>' +
        '<br/> <p>Everyone at the table must reach down and touch the floor. The last player to do so must drink</p>',

      '<h1>Five of Hearts</h1> <h2>Guys drink</h2>' +
        '<img width="35%" src="/images/kings-cup/5H.png"/>' +
        '<br/> <p>All of the male players must drink.</p>',

      '<h1>Six of Hearts</h1> <h2>Chicks drink holding hands</h2>' +
        '<img width="35%" src="/images/kings-cup/6H.png"/>' +
        '<br/> <p>All of the female players must drink.</p>',

      '<h1>Seven of Hearts</h1> <h2>Put your drinks up toward Heaven</h2>' +
        '<img width="35%" src="/images/kings-cup/7H.png"/>' +
        '<br/> <p>Everyone at the table must put both hands...or in this case drinks... in the air. The last player to do so must drink.</p>',

      '<h1>Eight of Hearts</h1> <h2>Pick a mate</h2>' +
        '<img width="35%" src="/images/kings-cup/8H.png"/>' +
        '<br/> <p>The player who draws picks another player to be their mate. The mate must drink every time the original player does, and vice versa. This keeps going until another 8 is drawn.</p>',

      '<h1>Nine of Hearts</h1> <h2>Bust a Rhyme about love</h2>' +
        '<img width="35%" src="/images/kings-cup/9H.png"/>' +
        '<br/> <p>The player who draws must say one line. The other players have 5 seconds to say another line that rhymes with the original one. The first player who repeats or fails to think of a rhyme must drink.</p>',

      '<h1>Ten of Hearts</h1> <h2>Categories of Love</h2>' +
        '<img width="35%" src="/images/kings-cup/10H.png"/>' +
        '<br/> <p>The player who draws must declare a category and start with the first. The other players have 5 seconds to add to the category list. The first player who repeats or fails to think of one must drink.</p>',

      '<h1>Jack of Hearts</h1> <h2>Throw it back</h2>' +
        '<img width="35%" src="/images/kings-cup/JH.png"/>' +
        '<br/> <p>The last person who went drinks.</p>',

      '<h1>Queen of Hearts</h1> <h2>Quiz Master </h2>' +
        '<img width="35%" src="/images/kings-cup/QH.png"/>' +
        '<br/> <p>The player who draws can ask pop quiz questions. Whoever answers wrong must drink. This continues until another player draws a Queen.</p>',

      '<h1>King of Hearts</h1> <h2>Make a rule</h2>' +
        '<img width="35%" src="/images/kings-cup/KS.png"/>' +
        '<br/> <p>The player who draws can make what ever rule they want.</p>',
      //END of Hearts

      //Start of Diamonds
      '<h1>Ace of Diamonds</h1> <h2>Classic Waterfall</h2>' +
        '<img width="35%" src="/images/kings-cup/AD.png"/>' +
        '<br/> <p>Everyone starts chugging their drink. A player cannot stop drinking until the person to their right has stopped drinking.</p>',

      '<h1>Two of Diamonds</h1> <h2>Pick someone to drink your drink</h2>' +
        '<img width="35%" src="/images/kings-cup/2D.png"/>' +
        '<br/> <p>The player who draws can choose another player who has to drink for a set amount of time.</p>',

      '<h1>Three of Diamonds</h1> <h2>Me drink for 10 seconds</h2>' +
        '<img width="35%" src="/images/kings-cup/3D.png"/>' +
        '<br/> <p>The player who draws must drink.</p>',

      '<h1>Four of Diamonds</h1> <h2>Touch the floor</h2>' +
        '<img width="35%" src="/images/kings-cup/4D.png"/>' +
        '<br/> <p>Everyone at the table must reach down and touch the floor. The last player to do so must drink</p>',

      '<h1>Five of Diamonds</h1> <h2>Guys help each other drink</h2>' +
        '<img width="35%" src="/images/kings-cup/5D.png"/>' +
        '<br/> <p>All of the male players must drink.</p>',

      '<h1>Six of Diamonds</h1> <h2>Chicks help each other drink</h2>' +
        '<img width="35%" src="/images/kings-cup/6D.png"/>' +
        '<br/> <p>All of the female players must drink.</p>',

      '<h1>Seven of Diamonds</h1> <h2>Put your hands up toward Heaven</h2>' +
        '<img width="35%" src="/images/kings-cup/7D.png"/>' +
        '<br/> <p>Everyone at the table must put both hands in the air. The last player to do so must drink.</p>',

      '<h1>Eight of Diamonds</h1> <h2>Pick a mate and Cheers each Drink</h2>' +
        '<img width="35%" src="/images/kings-cup/8D.png"/>' +
        '<br/> <p>The player who draws picks another player to be their mate. The mate must drink every time the original player does, and vice versa. This keeps going until another 8 is drawn.</p>',

      '<h1>Nine of Diamonds</h1> <h2>Bust a Rhyme about Money</h2>' +
        '<img width="35%" src="/images/kings-cup/9D.png"/>' +
        '<br/> <p>The player who draws must say one line. The other players have 5 seconds to say another line that rhymes with the original one. The first player who repeats or fails to think of a rhyme must drink.</p>',

      '<h1>Ten of Diamonds</h1> <h2>Categories of Wealth</h2>' +
        '<img width="35%" src="/images/kings-cup/10D.png"/>' +
        '<br/> <p>The player who draws must declare a category and start with the first. The other players have 5 seconds to add to the category list. The first player who repeats or fails to think of one must drink.</p>',

      '<h1>Jack of Diamonds</h1> <h2>Everyone dance for 5 seconds</h2>' +
        '<img width="35%" src="/images/kings-cup/JD.png"/>' +
        '<br/> <p>The last person who went drinks.</p>',

      '<h1>Queen of Diamonds</h1> <h2>Know it all Master </h2>' +
        '<img width="35%" src="/images/kings-cup/QD.png"/>' +
        '<br/> <p>Anything you say can not be refuted. Those who disagree drink. This continues until another player draws a Queen.</p>',

      '<h1>King of Diamonds</h1> <h2>Make a rule for your poor, poor peasants</h2>' +
        '<img width="35%" src="/images/kings-cup/KD.png"/>' +
        '<br/> <p>The player who draws can make what ever rule they want.</p>',
      //END Diamonds

      //Start of Clubs
      '<h1>Ace of Clubs</h1> <h2>Pick someone to finish their drink</h2>' +
        '<img width="35%" src="/images/kings-cup/AC.png"/>' +
        '<br/> <p>Everyone starts chugging their drink while person of choice is finishing their drink. All players cannot stop drinking until the choosen person finishes.</p>',

      '<h1>Two of Clubs</h1> <h2>Pick someone to skip their next turn</h2>' +
        '<img width="35%" src="/images/kings-cup/2C.png"/>' +
        '<br/> <p>The player who draws can choose another player who has to skip their next turn.</p>',

      '<h1>Three of Clubs</h1> <h2>Me drink</h2>' +
        '<img width="35%" src="/images/kings-cup/3C.png"/>' +
        '<br/> <p>The player who draws must drink.</p>',

      '<h1>Four of Clubs</h1> <h2>Touch the floor with your elbow</h2>' +
        '<img width="35%" src="/images/kings-cup/4C.png"/>' +
        '<br/> <p>Everyone at the table must reach down and touch the floor. The last player to do so must drink</p>',

      '<h1>Five of Clubs</h1> <h2>Guys drink</h2>' +
        '<img width="35%" src="/images/kings-cup/5C.png"/>' +
        '<br/> <p>All of the male players must drink.</p>',

      '<h1>Six of Clubs</h1> <h2>Chicks drink</h2>' +
        '<img width="35%" src="/images/kings-cup/6C.png"/>' +
        '<br/> <p>All of the female players must drink.</p>',

      '<h1>Seven of Clubs</h1> <h2>Put your ______ toward Heaven</h2>' +
        '<img width="35%" src="/images/kings-cup/7C.png"/>' +
        '<br/> <p>Everyone at the table must put ???? in the air. The last player to do so must drink.</p>',

      '<h1>Eight of Clubs</h1> <h2>Pick a mate and _____ each Drink</h2>' +
        '<img width="35%" src="/images/kings-cup/8C.png"/>' +
        '<br/> <p>The player who draws picks another player to be their mate. The mate must drink every time the original player does, and vice versa. This keeps going until another 8 is drawn.</p>',

      '<h1>Nine of Clubs</h1> <h2>Bust a Rhyme about _____</h2>' +
        '<img width="35%" src="/images/kings-cup/9C.png"/>' +
        '<br/> <p>The player who draws must say one line. The other players have 5 seconds to say another line that rhymes with the original one. The first player who repeats or fails to think of a rhyme must drink.</p>',

      '<h1>Ten of Clubs</h1> <h2>Categories of ______</h2>' +
        '<img width="35%" src="/images/kings-cup/10C.png"/>' +
        '<br/> <p>The player who draws must declare a category and start with the first. The other players have 5 seconds to add to the category list. The first player who repeats or fails to think of one must drink.</p>',

      '<h1>Jack of Clubs</h1> <h2>Throw a drink back</h2>' +
        '<img width="35%" src="/images/kings-cup/JC.png"/>' +
        '<br/> <p>The last person who went drinks.</p>',

      '<h1>Queen of Clubs</h1> <h2>Everyone must call you highness </h2>' +
        '<img width="35%" src="/images/kings-cup/QC.png"/>' +
        '<br/> <p>Anything someone says to you must end in "your highness". This continues until another player draws a Queen.</p>',

      '<h1>King of Clubs</h1> <h2>Make a rule</h2>' +
        '<img width="35%" src="/images/kings-cup/KC.png"/>' +
        '<br/> <p>The player who draws can make what ever rule they want.</p>',
    ]
    const randomItem = myArray[Math.floor(Math.random() * myArray.length)]
    document.getElementById('demo').innerHTML = randomItem
  }

  const removeBackCard = () => {
    document.getElementById('backCard').style.display = 'none'
  }

  return (
    <React.Fragment>
      <style jsx>
        {`
          .kings-cup-container {
            background-color: #75b26f;
            font-family: 'Helvetica';
            color: white;
            height: 100vh;
            z-index: 0;
          }
          p {
            max-width: 500px;
            text-align: center;
            margin: 0;
          }
          .banner {
            width: 30%;
            margin: 3rem 0;
          }
          .backCardImg {
            width: 25%;
          }
          .cardImg {
            width: 35%;
          }
          .beerImg1 {
            right: 0;
            bottom: 0;
            position: absolute;
            width: 15%;
            -moz-transform: scaleX(-1);
            -o-transform: scaleX(-1);
            -webkit-transform: scaleX(-1);
            transform: scaleX(-1);
            filter: FlipH;
            -ms-filter: 'FlipH';
            z-index: 1;
          }

          .beerImg2 {
            left: 0;
            bottom: 0;
            position: absolute;
            width: 15%;
            z-index: 1;
          }

          .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          button {
            position: relative;
            color: #fff;
            text-decoration: none;
            background-color: #4b6d7c;
            font-family: 'Helvetica';
            font-weight: 700;
            font-size: 2rem;
            padding: 4px;
            -webkit-border-radius: 8px;
            -moz-border-radius: 8px;
            border-radius: 8px;
            -webkit-box-shadow: 0px 9px 0px #3c5762;
            -moz-box-shadow: 0px 9px 0px #3c5762;
            box-shadow: 0px 9px 0px #3c5762;
            width: 180px;
            text-align: center;
            -webkit-transition: all 0.1s ease;
            -moz-transition: all 0.1s ease;
            -ms-transition: all 0.1s ease;
            -o-transition: all 0.1s ease;
            transition: all 0.1s ease;
            margin-bottom: 20px;
          }
          button:active {
            -webkit-box-shadow: 0px 3px 0px #3c5762;
            -moz-box-shadow: 0px 3px 0px #3c5762;
            box-shadow: 0px 3px 0px #3c5762;
            position: relative;
            top: 6px;
          }
          button:focus {
            outline: 0;
          }
          h1 {
            font-family: 'Lobster', cursive;
            margin: 0;
          }

          h2 {
            font-family: 'Poiret One', cursive;
            margin: 5;
          }
          @media only screen and (max-width: 750px) {
            .banner {
              width: 35%;
              left: 1px;
              top: 15px;
              position: absolute;
              transform: rotate(-20deg);
              margin: 1rem 0 0 0;
            }
            .backCardImg {
              width: 30%;
            }
            .cardImg {
              width: 40%;
            }
            h1 {
              font-size: 2rem;
            }

            h2 {
              font-size: 1.5rem;
            }
            p {
              font-size: 1rem;
            }
            .beerImg1,
            .beerImg2 {
              width: 20%;
            }
            button {
              font-weight: 500;
              font-size: 1.5rem;
              padding: 4px;
              -webkit-box-shadow: 0px 4px 0px #3c5762;
              -moz-box-shadow: 0px 4px 0px #3c5762;
              box-shadow: 0px 4px 0px #3c5762;
              width: 160px;
              margin-top: 55px;
            }
            button:active {
              -webkit-box-shadow: 0px 1px 0px #3c5762;
              -moz-box-shadow: 0px 1px 0px #3c5762;
              box-shadow: 0px 3px 1px #3c5762;
              position: relative;
              top: 3px;
            }
          }

          @media only screen and (max-width: 500px) {
            .banner {
              width: 40%;
            }
            .backCardImg {
              width: 55%;
            }
            .cardImg {
              width: 50%;
            }
            h1 {
              font-size: 1.7rem;
            }

            h2 {
              font-size: 1.3rem;
            }
            p {
              font-size: 0.9rem;
            }
          }
          @media only screen and (max-width: 350px) {
            .banner {
              width: 35%;
            }
            .backCardImg {
              width: 50%;
            }
            .cardImg {
              width: 55%;
            }
            h1 {
              font-size: 1.6rem;
            }

            h2 {
              font-size: 1.2rem;
            }
            p {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
      <div className="kings-cup-container">
        <div className="content">
          <img src="/images/kings-cup/KC-banner.png" className="banner" />
          <button
            onClick={() => {
              removeBackCard()
              cardDice()
            }}
          >
            Draw Card
          </button>
          <img
            src="/images/kings-cup/back.png"
            id="backCard"
            className="backCardImg"
          />
          <p id="demo"></p>
        </div>
        <img src="/images/kings-cup/KC-bottles.png" className="beerImg1" />
        <img src="/images/kings-cup/KC-bottles.png" className="beerImg2" />
      </div>
    </React.Fragment>
  )
}

export default KingsCupGamePage
