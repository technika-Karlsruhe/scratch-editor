/*
  scratch3_txt40/index.js
    get info method is called by scratch upon opening the extensions menu. Once the
    extension called TXT40 is opened a connection can be established to a
    fischertechnik TXT40 controller by clicking the orange connect button. Then,
    holt the red "Select"-button on the TXT40 until the blinking blue LED blinks
    with a much higher frequency. You should see the right controller now in the
    bluetooth connection window of the browser. Select and pair our controller.
    Wait until the LED on the TXT40 turns orange. Depending on whether you allowed
    notifications, you will either receive a notification or an alert when the
    connection is finished and the controller ready to be used.

  Currently only English and German translations are available.

*/
const Block = require('../ft_source/block');
const Main = require('../ft_source/index.js');
const Menus = require('../ft_source/menus.js');
const blockIconURI = require('./txt40_small.png');
const b = new Block(); // access block.js
const main = new Main(); // access index.js
const m = new Menus(); // access menus.js

const outInt = 12; // number of outputs *3 --> 4 for each individual output 2 for each motor set

const inInt = 8; // number of inputs

const servoInt = 3; // number of servos

const counterInt = 4; // number of counters

b.defaultValue(outInt, inInt, servoInt);

/**
 * Icon svg to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
 

/**
 * Class for the txt40 blocks in Scratch 3.0
 * @class
 */

const EXTENSION_ID = 'txt40';

class Scratch3TXT40Blocks {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {object}
         */
        this.runtime = runtime;
        this.runtime.on('PROJECT_STOP_ALL', this.reset.bind(this));// necessary to use the reset button
    
        globalThis.extensionnumber++; // increase the number of extensions
        globalThis.openedextensions.push('TXT40');
        if (globalThis.extensionnumber > 1) {
            main.addselections();
        } else {
            globalThis.type = 'TXT40';
        }
        main.addButton();
        main.knownUsbDeviceConnected('none');// try autoconnection
        // navigator.usb.addEventListener('connect', main.knownUsbDeviceConnected)
    }
    
    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        // translate.setup(); // setup translation
        b.setup(); // setup translation for blocks
        m.setup(); // setup translation for menus
        return { // Information returned to scratch gui
            id: EXTENSION_ID,
            name: 'TXT4.0',
            blockIconURI: blockIconURI,
            showStatusButton: false, // we are using our own
            docsURI: 'https://technika-karlsruhe.github.io/',


            blocks: [ // the blocks are already defined in the block.js file and accessed like that:
                b.getBlock_onOpenClose(),
                b.getBlock_onCounter(),
                b.getBlock_onInput2(),
                b.getBlock_getCounter(),
                b.getBlock_getSensor2(),
                b.getBlock_isClosed(),
                // b.getBlock_doPlaySound(),
                // b.getBlock_doPlaySoundWait(),
                b.getBlock_doPlaySound2(),
                b.getBlock_doStopSound(),
                b.getBlock_doSetLamp2(),
                b.getBlock_doSetOutput2(),
                b.getBlock_doResetCounter(),
                b.getBlock_doConfigureInput2(),
                b.getBlock_doSetMotorSpeed(),
                b.getBlock_doSetMotorSpeedDir(),
                b.getBlock_doSetMotorDir(),
                b.getBlock_doStopMotor(),
                b.getBlock_doSetMotorSpeedDirDist(),
                b.getBlock_doSetMotorSpeedDirSync(),
                b.getBlock_doSetMotorSpeedDirDistSync(),
                b.getBlock_doStopMotorAndReset(),
                b.getBlock_doSetServoPosition()
            ],

            menus: { // defining the different Menus, identified by the blocks through their name
                counterID: {
                    items: main._formatMenuCounter(counterInt, servoInt, outInt, inInt)
                },
                servoID: {
                    items: main._formatMenuservo(servoInt, outInt, inInt)
                },
                motorID: {
                    items: main._formatMenuM(outInt)
                },
                outputID: {
                    items: main._formatMenuOut(outInt)
                },
                inputID: {
                    items: main._formatMenuin(inInt, outInt)
                },
                inputModes2: {
                    items: m.inputModes2()
                },
                inputAnalogSensorTypes2: {
                    items: m.inputAnalogSensorTypes2()
                },
                inputDigitalSensorTypes: {
                    items: m.inputDigitalSensorTypes()
                },
                inputDigitalSensorChangeTypes: {
                    items: m.inputDigitalSensorChangeTypes()
                },
                motorDirection: {
                    items: m.motorDirection()
                },
                compares: {
                    items: m.compares()
                },
                soundfiles: {
                    items: m.soundfiles()
                },
                LOOP: {
                    items: m.LOOP()
                }
            }
        };
    }
    // Block functions, they are also defined in the block.js file and can be accessed like this:
    onOpenClose (args){
        return b.onOpenClose(args, globalThis.controller);
    }

    onInput2 (args) { // SENSOR, INPUT, OPERATOR, VALUE
        return b.onInput(args, globalThis.controller);
    }

    getSensor2 (args) {
        return b.getSensor(args, globalThis.controller);
    }

    isClosed (args) { // SENSOR, INPUT
        return b.isClosed(args, globalThis.controller);
    }

    doSetLamp2 (args){
        b.doSetLamp(args, globalThis.controller);
    }

    doSetOutput2 (args) {
        b.doSetOutput(args, globalThis.controller);
    }

    doConfigureInput2 (args) {
        b.doConfigureInput(args, globalThis.controller);
    }

    doSetMotorSpeed (args) {
        b.doSetMotorSpeed(args, globalThis.controller);
    }

    doSetMotorSpeedDir (args) {
        b.doSetMotorSpeedDir(args, globalThis.controller);
    }

    doSetMotorDir (args) {
        b.doSetMotorDir(args, globalThis.controller);
    }

    doStopMotor (args) {
        b.doStopMotor(args, globalThis.controller);
    }

    onCounter (args) { // COUNTER_ID, OPERATOR, VALUE
        b.onCounter(args, globalThis.controller);
    }

    getCounter (args) { // COUNTER_ID
        return b.getCounter(args, globalThis.controller);
    }

    doPlaySound (args) { // SOUND_ID
        b.doPlaySound(args, globalThis.controller);
    }

    doPlaySoundWait (args) { // SOUND_ID
        b.doPlaySoundWait(args, globalThis.controller);
    }

    doPlaySound2 (args) {
        b.doPlaySound2(args, globalThis.controller);
    }

    doStopSound (args) {
        b.doStopSound(args, globalThis.controller);
    }

    doResetCounter (args) { // COUNTER_ID
        b.doResetCounter(args, globalThis.controller);
    }

    doSetMotorSpeedDirDist (args) { // MOTOR_ID, SPEED, DIRECTION, DISTANCE
        b.doSetMotorSpeedDirDist(args, globalThis.controller);
    }

    doSetMotorSpeedDirSync (args) { // MOTOR_ID, SPEED, DIRECTION, SYNC
        b.doSetMotorSpeedDirSync(args, globalThis.controller);
    }

    doSetMotorSpeedDirDistSync (args) { // MOTOR_ID, SPEED, DIRECTION, DISTANCE, SYNC
        b.doSetMotorSpeedDirDistSync(args, globalThis.controller);
    }

    doStopMotorAndReset (args) { // MOTOR_ID
        b.doStopMotorAndReset(args, globalThis.controller);
    }

    doSetServoPosition (args) {
        b.doSetServoPosition(args, globalThis.controller);
    }

    reset () { // reset function triggered by pressing the red stop button
        if (typeof globalThis.controller !== 'undefined'){
            globalThis.controller.reset();
        }
    }
}

module.exports = Scratch3TXT40Blocks;
