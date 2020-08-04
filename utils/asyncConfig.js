export default () => {
    let {parsed} = require('dotenv').config();
    // TODO Get secrets and override for env here
    return parsed;
};