module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://10.20.152.10:9000'
            }
        }
    }
}
