const routes = require('./controllers');
const sequelize = require('.config/connection');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001; 
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const expressHandleBars = require('express-handlebars');
const handlebars = expressHandleBars.create({helpers});
const sess = {
    secret: 'So Secret',
    cookie: {
        maxAge: 31536000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict', 
    },
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(_dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);

sequelize.sync({ force:false }).then(() => {
    app.listen(PORT, () => console.log('Listening'))
})
