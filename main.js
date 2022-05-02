const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {

    _playerX;
    _playerY;

    constructor(field) {
        this._field = field;
        this._playerX = 0;
        this._playerY = 0;
    }

    print() {
        for (let i = 0; i < this._field.length; i++) {
            for (let k = 0; k < this._field[i].length; k++) {
                process.stdout.write(this._field[i][k]);
            }
            process.stdout.write('\n');
        }
    }

    askInput(){
        this.print();
        const input = prompt('Which way? ');
        switch (input) {
            case 'u':
                this._playerY -= 1;
            break;
            case 'd':
                this._playerY += 1;
            break;
            case 'l':
                this._playerX -= 1;
            break;
            case 'r':
                this._playerX += 1;
            break;
            default:
                console.log('Invalid Input. Choose u d l r')
        }

    }

    testWinLoss(){

        //console.log(`player x is ${this._playerX}, player y is ${this._playerY}`)
        if (this._playerX >= this._field[0].length || this._playerX < 0) {
            console.log('Out of bounds!')
            return true;
        }

        else if (this._playerY >= this._field.length || this._playerY < 0) {
            console.log('Out of bounds!')
            return true;
        }

        else if(this._field[this._playerY][this._playerX] == 'O'){
            console.log('You fell into a hole!')
            return true;
        }
        
        else if(this._field[this._playerY][this._playerX] == '^'){
            console.log('You found the hat! Nice!')
            return true;
        }

        else {
            this._field[this._playerY][this._playerX] = '*';
            return false;
        }
    }

    playGame(){
        let end = false;

        while (!end){
            this.askInput();
            end = this.testWinLoss();
        }
    }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

  myField.playGame();