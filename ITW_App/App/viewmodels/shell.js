define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        navbar:
            $(document).on('click', function () {
                $('.collapse').collapse('hide');
            }),
        activate: function () {
            router.map([
                { route: '', title: 'Welcome', moduleId: 'viewmodels/welcome', nav: false, menu: '' },
                { route: 'countleag', moduleId: 'viewmodels/countleag', nav: true, menu: 'Countries and Leagues' },
                { route: 'teams', moduleId: 'viewmodels/teams', nav: true, menu: 'Teams' },
                { route: 'players', moduleId: 'viewmodels/players', nav: true, menu: 'Players' },
                { route: 'leagues_details/:id', moduleId: 'viewmodels/leagues_details', nav: false, menu: '' },
                { route: 'teams_details/:team_fifa_api_id/:id', moduleId: 'viewmodels/teams_details', nav: false, menu: '' },
                { route: 'players_details/:player_fifa_api_id/:id', moduleId: 'viewmodels/players_details', nav: false, menu: '' },
                { route: 'matches_details/:id', moduleId: 'viewmodels/matches_details', nav: false, menu: '' }
            ]).buildNavigationModel();
            return router.activate();
        }
    }
});