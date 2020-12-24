module.exports = {
  "port": process.env.PORT,
  "adminAccount": "admin@admin.com",
  "timeout":120000,
  "db": {
    "connectString": process.env.CONNECTSTRING,
    "servername": "127.0.0.1",
    "DATABASE": "yapi",
    "port": 27017,
    "user": process.env.CONNECTUSER,
    "pass": process.env.CONNECTPASS,
    "authSource": "yapi"
  },
  "mail": {
    "enable": true,
    "host": "smtp.163.com",
    "port": 465,
    "from": "***@163.com",
    "auth": {
      "user": "***@163.com",
      "pass": "*****"
    }
  },
//   "plugins": [
//     {
//        "name": "add-user"
//     }
//  ]
}