# HELP THE SQUIRREL 🐿🐿

## PLAY THE GAME:

https://ksfraan.github.io/Ironhack-project1-squirrel-game/main%20files/

## DESCRIPTION:

HELP THE SQUIRREL is a game where the player tries to help the squirrel catch his good nuts for the winter without catching bad nuts. The player wins when a sufficient number of good nuts are stored, and the player lose if the maximum limit of 3 bad nuts are captured.

## MVP:

-   It's a game that can be easily accessed, with a functional start button that will take you to the game screen, where everything happens, the player can capture the nuts by controlling the squirrel using the left and right arrow to control the squirrel. If he manages to capture the minimum number of good nuts, among the many bad nuts that fall, for the squirrel to spend the winter (20 good nuts), the player will win and receive congratulations on his victory, however, if he captures 3 bad nuts, the player will lose and will be warned that it was not the case this time. However, it won't be the last opportunity to help the squirrel, as any player can restart the game as many times as they want. The squirrel thanks you!

## BACKLOG:

-   Add a song to the game

-   Add objects that fall and generate life for the player

-   Add difficulty levels

## DATA STRUCTURE:

-   ## HTML
-   ## CSS
-   ## JavaScript

    -   index.js

    -   game.js\*\*

        ### - Game()

            -   this.playerElement
            -   this.nut1
            -   this.nut2
            -   this.nut1Element
            -   this.nut2Element
            -   this.lives
            -   this.scoreElement
            -   this.score
            -   this.livesElement
            -   this.gameContainer
            -   this.letsGoTitle
            -   this.restartButton
            -   this.endGameWrapper
            -   this.wonLoseText
            -   this.hasWon
            -   this.secondScreen
            -   this.firstScreen
            -   this.mainMenuButton
            -   this.isLive

        ### - startGame()

        ### - beginGame()

        ### - gameLoop()

        ### - renderNuts()

        ### - chackCollision()

        ### - updateCounters()

        ### - endGame()

        ### - resetScoreAndLives()

    -   player.js

        ### - Player()

            -   this.playerElement
            -   this.gameContainer
            -   this.position
            -   this.moveSpeed

        ### - move()

    -   nut.js

        -   this.nutElement
        -   this.type
        -   this.animationId
        -   this.horizontalPosition

        ### - appendTo()

        ### - startAnimation()

        ### - atopAnimation()

        ### - resetPosition()

        ### - getNutElement()

## STATES Y STATES TRANSITIONS:

-   Start Screen
-   Game Screen
-   Restart and Main Menu button

## TASK:

## LINKS:

-   Apresentantion link: https://docs.google.com/presentation/d/18eEBAHkbBE0WULyO3aRonDG4OB8NY1BIt_1CkLuBCuA/edit?usp=sharing

-   github link: https://github.com/Ksfraan/Ironhack-project1-squirrel-game

-   deployment link: https://ksfraan.github.io/Ironhack-project1-squirrel-game/main%20files/

-   Trello link: https://trello.com/b/5VvzlkOA/my-first-project-ironhack
