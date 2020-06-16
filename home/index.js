import angular from 'angular';

// Create the module where our functionality can attach to
let sliderModule = angular.module('home', []);

// Include our UI-Router config settings
import SliderConfig from './home.config';
sliderModule.config(SliderConfig);

// Controllers
import SliderCtrl from './home.controller';
sliderModule.controller('SliderCtrl', SliderCtrl);

export default sliderModule;