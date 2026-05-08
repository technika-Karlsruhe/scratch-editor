import React from 'react';
import {FormattedMessage} from 'react-intl';

import btsmartIconURL from './ft/btsmart_big.png';
import btsmartInsetIconURL from './ft/btsmart_small.png';
import btsmartConnectionIconURL from './ft/btsmart_small.png';
import btsmartConnectionSmallIconURL from './ft/btsmart_small.png';

import btreceiverIconURL from './ft/btreceiver_big.png';
import btreceiverInsetIconURL from './ft/btreceiver_small.png';
import btreceiverConnectionIconURL from './ft/btreceiver_small.png';
import btreceiverConnectionSmallIconURL from './ft/btreceiver_small.png';

import txtIconURL from './ft/txt_big.png';
import txtInsetIconURL from './ft/txt_small.png';
import txtConnectionIconURL from './ft/txt_small.png';
import txtConnectionSmallIconURL from './ft/txt_small.png';

import robbyIconURL from './ft/robby_big.png';
import robbyInsetIconURL from './ft/robby_small.png';
import robbyConnectionIconURL from './ft/robby_small.png';
import robbyConnectionSmallIconURL from './ft/robby_small.png';

import txIconURL from './ft/tx_big.png';
import txInsetIconURL from './ft/tx_small.png';
import txConnectionIconURL from './ft/tx_small.png';
import txConnectionSmallIconURL from './ft/tx_small.png';

import txt40IconURL from './ft/txt40_big.png';
import txt40InsetIconURL from './ft/txt40_small.png';
import txt40ConnectionIconURL from './ft/txt40_small.png';
import txt40ConnectionSmallIconURL from './ft/txt40_small.png';

import ltIconURL from './ft/lt_big.png';
import ltInsetIconURL from './ft/lt_small.png';
import ltConnectionIconURL from './ft/lt_small.png';
import ltConnectionSmallIconURL from './ft/lt_small.png';

import ftduinoIconURL from './ft/ftduino_big.png';
import ftduinoInsetIconURL from './ft/ftduino_small.png';
import ftduinoConnectionIconURL from './ft/ftduino_small.png';
import ftduinoConnectionSmallIconURL from './ft/ftduino_small.png';

import rxIconURL from './ft/rx_big.png';
import rxInsetIconURL from './ft/rx_small.png';
import rxConnectionIconURL from './ft/rx_small.png';
import rxConnectionSmallIconURL from './ft/rx_small.png';

import tfIconURL from './tf/TensorFlow_big.png';
import tfInsetIconURL from './tf/TensorFlow_small.svg';
import tfConnectionIconURL from './tf/TensorFlow_small.svg';
import tfConnectionSmallIconURL from './tf/TensorFlow_small.svg';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

import faceSensingIconURL from './faceSensing/faceSensing.png';
import faceSensingInsetIconURL from './faceSensing/faceSensing-small.svg';

export default [
    {
        name: 'BT-Smart',
        extensionId: 'btsmart',
        collaborator: 'technika',
        iconURL: btsmartIconURL,
        insetIconURL: btsmartInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the bt-smart."
                description="Description for the 'fischertechnik' extension"
                id="gui.extension.btsmart.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: btsmartConnectionIconURL,
        connectionSmallIconURL: btsmartConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their fischertechnik."
                id="gui.extension.btsmart.connectingMessage"
            />
        ),
        helpLink: 'https://technika-karlsruhe.github.io/'
    },
    {
        name: 'BT-Receiver',
        extensionId: 'btreceiver',
        collaborator: 'technika',
        iconURL: btreceiverIconURL,
        insetIconURL: btreceiverInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the bt-receiver."
                description="Description for the 'fischertechnik' extension"
                id="gui.extension.btreceiver.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: btreceiverConnectionIconURL,
        connectionSmallIconURL: btreceiverConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their fischertechnik."
                id="gui.extension.btreceiver.connectingMessage"
            />
        ),
        helpLink: 'https://technika-karlsruhe.github.io/'
    },
    {
        name: 'TXT',
        extensionId: 'txt',
        collaborator: 'technika',
        iconURL: txtIconURL,
        insetIconURL: txtInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the TXT."
                description="Description for the 'fischertechnik' extension"
                id="gui.extension.txt.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: txtConnectionIconURL,
        connectionSmallIconURL: txtConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their fischertechnik."
                id="gui.extension.txt.connectingMessage"
            />
        ),
        helpLink: 'https://technika-karlsruhe.github.io/'
    },
    {
        name: 'Robby',
        extensionId: 'robby',
        collaborator: 'technika',
        iconURL: robbyIconURL,
        insetIconURL: robbyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with Robby."
                description="Description for the 'fischertechnik' extension"
                id="gui.extension.robby.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: robbyConnectionIconURL,
        connectionSmallIconURL: robbyConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their fischertechnik."
                id="gui.extension.robby.connectingMessage"
            />
        ),
        helpLink: 'https://technika-karlsruhe.github.io/'
    },
    {
        name: 'TX',
        extensionId: 'tx',
        collaborator: 'technika',
        iconURL: txIconURL,
        insetIconURL: txInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with TX."
                description="Description for the 'fischertechnik' extension"
                id="gui.extension.tx.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: txConnectionIconURL,
        connectionSmallIconURL: txConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their fischertechnik."
                id="gui.extension.tx.connectingMessage"
            />
        ),
        helpLink: 'https://technika-karlsruhe.github.io/'
    },
    {
        name: 'TXT4.0',
        extensionId: 'txt40',
        collaborator: 'technika',
        iconURL: txt40IconURL,
        insetIconURL: txt40InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with TXT4.0."
                description="Description for the 'fischertechnik' extension"
                id="gui.extension.txt40.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: txt40ConnectionIconURL,
        connectionSmallIconURL: txt40ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their fischertechnik."
                id="gui.extension.txt40.connectingMessage"
            />
        ),
        helpLink: 'https://technika-karlsruhe.github.io/'
    },
    {
        name: 'LT',
        extensionId: 'lt',
        collaborator: 'technika',
        iconURL: ltIconURL,
        insetIconURL: ltInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with LT."
                description="Description for the 'fischertechnik' extension"
                id="gui.extension.lt.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: ltConnectionIconURL,
        connectionSmallIconURL: ltConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their fischertechnik."
                id="gui.extension.lt.connectingMessage"
            />
        ),
        helpLink: 'https://technika-karlsruhe.github.io/'
    },
    {
        name: 'ftduino',
        extensionId: 'ftduino',
        collaborator: 'technika',
        iconURL: ftduinoIconURL,
        insetIconURL: ftduinoInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with ftduino."
                description="Description for the 'fischertechnik' extension"
                id="gui.extension.ftduino.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: ftduinoConnectionIconURL,
        connectionSmallIconURL: ftduinoConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their fischertechnik."
                id="gui.extension.ftduino.connectingMessage"
            />
        ),
        helpLink: 'https://technika-karlsruhe.github.io/'
    },
    {
        name: 'RX',
        extensionId: 'rx',
        collaborator: 'technika',
        iconURL: rxIconURL,
        insetIconURL: rxInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with RX."
                description="Description for the 'fischertechnik' extension"
                id="gui.extension.rx.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: rxConnectionIconURL,
        connectionSmallIconURL: rxConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their fischertechnik."
                id="gui.extension.rx.connectingMessage"
            />
        ),
        helpLink: 'https://technika-karlsruhe.github.io/'
    },
    {
        name: 'TensorFlow',
        extensionId: 'tensorflow',
        collaborator: 'technika',
        iconURL: tfIconURL,
        insetIconURL: tfInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="AI with TensorFlow and Teachable Machine."
                description="Description for the 'TensorFlow' extension"
                id="gui.extension.tf.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: tfConnectionIconURL,
        connectionSmallIconURL: tfConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their fischertechnik."
                id="gui.extension.tf.connectingMessage"
            />
        ),
        helpLink: 'https://technika-karlsruhe.github.io/'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Face Sensing"
                description="Name for the 'Face Sensing' extension"
                id="gui.extension.faceSensing.name"
            />
        ),
        extensionId: 'faceSensing',
        iconURL: faceSensingIconURL,
        insetIconURL: faceSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense faces with the camera."
                description="Description for the 'Face Sensing' extension"
                id="gui.extension.faceSensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        prescanMessage: (
            <FormattedMessage
                defaultMessage="Turn on your micro:bit, then press the button below to start searching for your device."
                description="Prompt before searching for a micro:bit"
                id="gui.extension.microbit.prescanMessage"
            />
        ),
        scanBeginMessage: (
            <FormattedMessage
                defaultMessage="Keep your micro:bit on and nearby."
                description="Information shown while searching for a micro:bit, before one is found"
                id="gui.extension.microbit.scanBeginMessage"
            />
        ),
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        prescanMessage: (
            <FormattedMessage
                defaultMessage="Turn on your Go Direct, then press the button below to start searching for your device."
                description="Prompt before searching for a Vernier Go Direct device"
                id="gui.extension.gdxfor.prescanMessage"
            />
        ),
        scanBeginMessage: (
            <FormattedMessage
                defaultMessage="Keep your Vernier Go Direct on and nearby."
                description="Information shown while searching for a Vernier Go Direct, before one is found"
                id="gui.extension.gdxfor.scanBeginMessage"
            />
        ),
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        prescanMessage: (
            <FormattedMessage
                defaultMessage="Turn on your LEGO EV3, then press the button below to start searching for your device."
                description="Prompt before searching for a LEGO EV3"
                id="gui.extension.ev3.prescanMessage"
            />
        ),
        scanBeginMessage: (
            <FormattedMessage
                defaultMessage="Keep your LEGO EV3 on and nearby."
                description="Information shown while searching for a LEGO EV3, before one is found"
                id="gui.extension.ev3.scanBeginMessage"
            />
        ),
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        prescanMessage: (
            <FormattedMessage
                // eslint-disable-next-line @stylistic/max-len
                defaultMessage="Press the button on your LEGO BOOST, then press the button below to start searching for your device."
                description="Prompt before searching for a LEGO BOOST"
                id="gui.extension.boost.prescanMessage"
            />
        ),
        scanBeginMessage: (
            <FormattedMessage
                defaultMessage="Keep your LEGO BOOST awake and nearby."
                description="Information shown while searching for a LEGO BOOST, before one is found"
                id="gui.extension.boost.scanBeginMessage"
            />
        ),
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        prescanMessage: (
            <FormattedMessage
                // eslint-disable-next-line @stylistic/max-len
                defaultMessage="Press the button on your LEGO WeDo 2.0, then press the button below to start searching for your device."
                description="Prompt before searching for a LEGO WeDo 2.0"
                id="gui.extension.wedo2.prescanMessage"
            />
        ),
        scanBeginMessage: (
            <FormattedMessage
                defaultMessage="Keep your LEGO WeDo 2.0 awake and nearby."
                description="Information shown while searching for a LEGO WeDo 2.0, before one is found"
                id="gui.extension.wedo2.scanBeginMessage"
            />
        ),
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    }
];
