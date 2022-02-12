module.exports = {
    HOST: 'ec2-54-159-244-207.compute-1.amazonaws.com',
    USER: 'mmcefppjntuqli',
    PASSWORD: 'bd90be89fcf4b05a31ddce6e78eaf410b6b10c5f20c46a471a629642f697b981',
    DB: 'dbkmcmu8aqfso7',
    DIALECT: 'postgres',
    ssl: true,
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
}

// module.exports = {
//     HOST: '192.168.64.2',
//     USER: 'tomas',
//     PASSWORD: '1234',
//     DB: 'netflix_db',
//     DIALECT: 'mysql'
// }