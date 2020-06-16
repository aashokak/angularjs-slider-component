function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('home', {
    url: '',
    controller: 'SliderCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html'
  });

};

export default HomeConfig;