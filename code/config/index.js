/**
 * Created by jamesspence on 10/17/15.
 */

function Config(app)
{
    require('dotenv').load();
    require('./app')(app);
    require('./database')();
    require('./view')(app);
}

module.exports = Config;