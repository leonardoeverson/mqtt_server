module.exports.mongodb_conn = function(schema){
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/mqtt_metric', {useNewUrlParser: true});
    let Metric;
    try{
        if(mongoose.model('Metric')){
            return mongoose.model('Metric')
        }

    }catch (e) {
        if (e.name === 'MissingSchemaError') {
            schema = new mongoose.Schema(schema);
            Metric = mongoose.model('Metric', schema);
            return Metric;
        }
        console.log(e);
    }
};


module.exports.mongodb_insert = function(db){

    // let conn_mongogb = mongodb_conn({length: Number, topic : String , client_id: Number});
    // let data_mqtt_metrics = new conn_mongogb({length: packet.payload.byteLength, topic : packet.topic, client_id: client.conn.user_id});
    db.save().then();
};