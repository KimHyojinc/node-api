const express = require("express");
// const { swaggerUi, specs } = require('./swagger/swagger');
const app = express();
const db = require('./lib/db');
const YAML = require('yamljs');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger-output.json');
const swagger = require('./swagger/swagger');
const frontRouter = require("./routes/front/route");
const mngRouter = require("./routes/mng/route");

const swaggerSpec = YAML.load(path.join(__dirname, './build/swagger.yaml'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("port", process.env.PORT || 3030); // 포트 설정
app.set("host", process.env.HOST || "0.0.0.0"); // 아이피 설정

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

//root
app.get("/api", function (req, res) {
    res.send("접속된 아이피: " + req.ip);
});

//API Route
app.use('/api/front', frontRouter);
app.use('/api/mng', mngRouter);

// error handler
app.use(function (req, res, next) {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// 서버 동작중인 표시
app.listen(app.get("port"), app.get("host"), () =>
    console.log(
        "Server is running on : " + app.get("host") + ":" + app.get("port")
    )
);