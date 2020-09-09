const config = {
    //Puerto
        port: process.env.PORT || 3000,
    //Database
        db: 'mongodb://localhost/dbnodemonapi',
    //test enviroment
        test_env: 'test',
        test_db: 'mongodb://localhost/dbnodemonapi-test',
        test_port: 3001

};
export default config;