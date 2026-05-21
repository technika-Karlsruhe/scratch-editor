class Menus {
    constructor (runtime) {
        this.runtime = runtime;
        globalThis.translate.setup();
    }

    setup () {
        globalThis.translate.setup();
    }

    inputModes () {
        return [
            {text: globalThis.translate._getText('Digitalvoltage'), value: 'd10v'},
            {text: globalThis.translate._getText('Digitalresistance'), value: 'd5k'},
            {text: globalThis.translate._getText('Analoguevoltage'), value: 'a10v'},
            {text: globalThis.translate._getText('Analogueresistance'), value: 'a5k'}
        ];
    }

    inputModes2 () {
        return [
            {text: globalThis.translate._getText('Digitalvoltage'), value: 'd10v'},
            {text: globalThis.translate._getText('Digitalresistance'), value: 'd5k'},
            {text: globalThis.translate._getText('Analoguevoltage'), value: 'a10v'},
            {text: globalThis.translate._getText('Analogueresistance'), value: 'a5k'},
            {text: globalThis.translate._getText('DistanceSensor'), value: 'ultrasonic'}
        ];
    }

    inputAnalogSensorTypes () {
        return [
            {text: globalThis.translate._getText('ColorSensor'), value: 'sens_color'},
            {text: globalThis.translate._getText('NTCResistor'), value: 'sens_ntc'},
            {text: globalThis.translate._getText('PhotoResistor'), value: 'sens_photo'}
        ];
    }

    inputAnalogSensorTypes2 () {
        return [
            {text: globalThis.translate._getText('ColorSensor'), value: 'sens_color'},
            {text: globalThis.translate._getText('NTCResistor'), value: 'sens_ntc'},
            {text: globalThis.translate._getText('PhotoResistor'), value: 'sens_photo'},
            {text: globalThis.translate._getText('DistanceSensor'), value: 'sens_distance'}
        ];
    }

    inputDigitalSensorTypes () {
        return [
            {text: globalThis.translate._getText('Button'), value: 'sens_button'},
            {text: globalThis.translate._getText('Lightbarrier'), value: 'sens_lightBarrier'},
            {text: globalThis.translate._getText('Reedcontact'), value: 'sens_reed'},
            {text: globalThis.translate._getText('TrailSensor'), value: 'sens_trail'}
        ];
    }

    inputDigitalSensorChangeTypes () {
        return [
            {text: globalThis.translate._getText('Open'), value: 'open'},
            {text: globalThis.translate._getText('Closed'), value: 'closed'}
        ];
    }

    motorDirection () {
        return [
            {text: globalThis.translate._getText('Forward'), value: '1'},
            {text: globalThis.translate._getText('Backwards'), value: '-1'}
        ];
    }

    compares () {
        return [
            {text: '>', value: '>'},
            {text: '<', value: '<'}
        ];
    }

    soundfiles (){
        const files = [
            '01_Airplane', '02_Alarm', '03_Bell', '04_Braking', '05_Car_horn_long',
            '06_Car_horn_short', '07_Crackling_wood', '08_Excavator', '09_Fantasy_1',
            '10_Fantasy_2', '11_Fantasy_3', '12_Fantasy_4', '13_Farm', '14_Fire_department',
            '15_Fire_noises', '16_Formula1', '17_Helicopter', '18_Hydraulic', '19_Motor_sound',
            '20_Motor_starting', '21_Propeller_airplane', '22_Roller_coaster', '23_Ships_horn',
            '24_Tractor', '25_Truck', '26_Augenzwinkern', '27_Fahrgeraeusch', '28_Kopf_heben',
            '29_Kopf_neigen'
        ];
  
        return files.map(filename => ({
            text: `${filename}.wav`,
            value: `${filename}.wav`
        }));
    }

    LOOP () {
        return [
            {text: globalThis.translate._getText('yes'), value: 'yes'},
            {text: globalThis.translate._getText('no'), value: 'no'}
        ];
    }

    ledState () {
        return [
            {text: globalThis.translate._getText('on'), value: '1'},
            {text: globalThis.translate._getText('off'), value: '0'}
        ];
    }

    ledStatebt () {
        return [
            {text: globalThis.translate._getText('blue'), value: '0'},
            {text: globalThis.translate._getText('orange'), value: '1'}
        ];
    }
}

module.exports = Menus;
