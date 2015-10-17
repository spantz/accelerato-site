/**
 * Created by jamesspence on 10/17/15.
 */

function Config(app)
{
    require('dotenv').load();
    require('./database')();
    require('./app')(app);
    require('./auth')(app);
    require('./view')(app);
}

module.exports = Config;