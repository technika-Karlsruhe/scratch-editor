/*
    scratch3_btreceiver/index.js
    get info method is called by scratch when the extensions menu opens.
    Once the BT-Receiver extension is opened, a connection can be
    established to a fischertechnik BT-Receiver controller by clicking the
    orange connect button. Then, hold the red "Select" button on the
    BT-Receiver until the blinking blue LED blinks with a much higher
    frequency. You should see the right controller now in the bluetooth
    connection window of the browser. Select and pair our controller. Wait
    until the LED on the BT-Receiver turns orange. Depending on whether
    you allowed notifications, you will either receive a notification or
    an alert when the connection is finished and the controller ready to
    be used.

  Currently only English and German translations are available.

*/
const Block = require('../ft_source/block');
const Main = require('../ft_source/index.js');
const Menus = require('../ft_source/menus.js');
const blockIconURI = require('./btreceiver_small.png');
const b = new Block(); // access block.js
const main = new Main(); // access index.js
const m = new Menus(); // access menus.js

const outInt = 9; // number of outputs

const inInt = 0; // number of inputs

const servoInt = 1; // number of servos

b.defaultValue(outInt, inInt, servoInt);

/**
 * Icon svg to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
 

/**
 * Class for the btreceiver blocks in Scratch 3.0
 * @class
 */

const EXTENSION_ID = 'btreceiver';

class Scratch3BTReceiverBlocks {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {object}
         */
        this.runtime = runtime;
        this.runtime.on('PROJECT_STOP_ALL', this.reset.bind(this));// necessary to use the reset button
    
        globalThis.extensionnumber++; // increase the number of extensions
        globalThis.openedextensions.push('BTReceiver');
        if (globalThis.extensionnumber > 1) {
            main.addselections();
        } else {
            globalThis.type = 'BTReceiver';
        }
        main.addButton();
        main.knownUsbDeviceConnected('none');// try autoconnection
        if (main.ismobile() === false){
            navigator.usb.addEventListener(
                'connect',
                main.knownUsbDeviceConnected
            ); // autoconnect once a paired device is detected
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
            name: 'BT-Receiver',
            blockIconURI: blockIconURI,
            showStatusButton: false, // we are using our own
            docsURI: 'https://technika-karlsruhe.github.io/',


            blocks: [ // the blocks are already defined in the block.js file and accessed like that:
                b.getBlock_dosetLamp(),
                b.getBlock_doSetOutput(),
                b.getBlock_doSetMotorSpeed(),
                b.getBlock_doSetMotorSpeedDir(),
                b.getBlock_doSetMotorDir(),
                b.getBlock_doStopMotor(),
                b.getBlock_doSetServoPosition(),
                b.getBlock_setLed()
            ],

            menus: { // defining the different Menus, identified by the blocks through their name
                motorID: {
                    items: main._formatMenuM(outInt)
                },
                servoID: {
                    items: main._formatMenuservo(servoInt, outInt, inInt)
                },
                motorDirection: {
                    items: m.motorDirection()
                },
                ledState: {
                    items: m.ledStatebt()
                }
            }
        };
    }
    // Block functions, they are also defined in the block.js file and can be accessed like this:

    doSetLamp (args){
        b.doSetLamp(args, globalThis.controller);
    }

    doSetOutput (args) {
        b.doSetOutput(args, globalThis.controller);
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

    doSetServoPosition (args) {
        b.doSetServoPosition(args, globalThis.controller);
    }

    setLed (args) {
        b.setLed(args, globalThis.controller);
    }

    reset () { // reset function triggered by pressing the red stop button
        if (typeof globalThis.controller !== 'undefined'){
            globalThis.controller.reset();
        }
    }
}

module.exports = Scratch3BTReceiverBlocks;
