function index(req, res, next) {

      res.render('expressSGRs/index', {
        expressSGR,
        user: req.user,
        name: req.query.name,
        sortKey
      });
    }

    function addFact(req, res, next) {
        req.user.facts.push(req.body);
        req.user.save(function(err) {
          res.redirect('/students');
        });
      }
  