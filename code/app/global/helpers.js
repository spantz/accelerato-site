/**
 * Created by jamesspence on 10/17/15.
 */

module.exports = (function () {
    /**
     * @param {string} key
     * @param {*} [defaultValue]
     * @returns {*}
     */
    global.getEnv = function (key, defaultValue) {
        defaultValue = defaultValue || undefined;

        if (typeof process.env[key] != 'undefined' && process.env[key] != null) {
            return process.env[key];
        } else {
            return defaultValue;
        }
    }
})();