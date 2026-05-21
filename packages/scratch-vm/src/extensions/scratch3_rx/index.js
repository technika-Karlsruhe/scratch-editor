/*
  scratch3_rx/index.js
    get info method is called by scratch upon opening the extensions menu. Once the
    extension called RX is opened a connection can be established to a fischertechnik
    RX controller by clicking the orange connect button. Then, holt the red
    "Select"-button on the RX until the blinking blue LED blinks with a much higher
    frequency. You should see the right controller now in the bluetooth connection
    window of the browser. Select and pair our controller. Wait until the LED on the
    RX turns orange. Depending on whether you allowed notifications, you will either
    receive a notification or an alert when the connection is finished and the
    controller ready to be used.

  Currently only English and German translations are available.

*/
const Block = require('../ft_source/block');
const Main = require('../ft_source/index.js');
const Menus = require('../ft_source/menus.js');
const blockIconURI = require('./rx_small.png');
const b = new Block(); // access block.js
const main = new Main(); // access index.js
const m = new Menus(); // access menus.js

const outInt = 12; // number of outputs *3 --> 4 for each individual output 2 for each motor set

const inInt = 8; // number of inputs

const servoInt = 0; // number of servos


b.defaultValue(outInt, inInt, servoInt);

/**
 * Icon svg to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
 

/**
 * Class for the rx blocks in Scratch 3.0
 * @class
 */

const EXTENSION_ID = 'rx';

class Scratch3RXBlocks {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {object}
         */
        this.runtime = runtime;
        this.runtime.on('PROJECT_STOP_ALL', this.reset.bind(this));// necessary to use the reset button
    
        globalThis.extensionnumber++; // increase the number of extensions
        globalThis.openedextensions.push('RX');
        if (globalThis.extensionnumber > 1) {
            main.addselections();
        } else {
            globalThis.type = 'RX';
        }
        main.addButton();
        main.knownUsbDeviceConnected('none');// try autoconnection
        if (main.ismobile() === false) {
            navigator.usb.addEventListener(
                'connect',
                main.knownUsbDeviceConnected
            ); // set up an Eventlistener which will attempt to autoconnect once a paired device is detected
        }
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
            name: 'RX',
            blockIconURI: blockIconURI,
            showStatusButton: false, // we are using our own
            docsURI: 'https://technika-karlsruhe.github.io/',


            blocks: [ // the blocks are already defined in the block.js file and accessed like that:
                b.getBlock_onOpenClose(),
                b.getBlock_onInput2(),
                b.getBlock_getSensor2(),
                b.getBlock_isClosed(),
                b.getBlock_doSetLamp2(),
                b.getBlock_doSetOutput2(),
                b.getBlock_doConfigureInput2(),
                b.getBlock_doSetMotorSpeed(),
                b.getBlock_doSetMotorSpeedDir(),
                b.getBlock_doSetMotorDir(),
                b.getBlock_doStopMotor()
            ],

            menus: { // defining the different Menus, identified by the blocks through their name
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

    reset () { // reset function triggered by pressing the red stop button
        if (typeof globalThis.controller !== 'undefined'){
            globalThis.controller.reset();
        }
    }
}

module.exports = Scratch3RXBlocks;
