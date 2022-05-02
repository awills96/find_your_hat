const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(field) {
        this._field = field;
    }

    print() {
        for (let i = 0; i < this._field.length; i++) {
            for (let k = 0; k < this._field[i].length; k++) {
                process.stdout.write(this._field[i][k]);
            }
            process.stdout.write('\n');
        }

        
    }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

  myField.print();