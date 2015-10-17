/**
 * Created by jamesspence on 10/17/15.
 */

function AuthMiddleware(req, res, next) {
    if (!req.user) {
        res.redirect('/login');
    } else {
        next();
    }
}

module.exports = AuthMiddleware;