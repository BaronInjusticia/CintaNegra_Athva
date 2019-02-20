const NODE_ENV =process.env.NODE_ENV || "dev";

const ENVS = {
    devs:{
        SECRET_KEY:"EoKGnuU7Zh",
        db:{
           url: "mongodb+srv://Baron:Daruma14@cluster0-gk0nl.mongodb.net/test?retryWrites=true"
    }
},
test:{
production:{
    SECRET_KEY: process.env.SECRET_KEY,
    db:{
        url:process.env.MONGO_URL
    }
        }
    }
};

module.exports = ENVS[NODE_ENV];