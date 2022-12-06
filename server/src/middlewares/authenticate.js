const jwt = require("jsonwebtoken");
const { User, Teacher, Course } = require("../models/index");
const authenticate = async (req, res, next) => {
    const token = req.header("token");
    try {
        const decode = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
        if (decode !== undefined) {
            req.user = decode;
            next();
        } else {
            res.status(401).send({
                statusCode: 401,
                message: "Yoy are not login.",
            });
        }
    } catch {
        res.status(500).send({
            statusCode: 500,
            message: "Something went wrong.",
        });
    }
};
const verifyToken = async (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    const token = bearerHeader && bearerHeader.split(" ")[1];
    try {
        const decode = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
        if (decode) {
            let user = await User.findOne({
                where: {
                    id: decode.id,
                },
                attributes: { exclude: ["password"] },
                raw: true,
            });
            if (!user) {
                return res.status(401).send({
                    statusCode: 401,
                    message: "Unathorized",
                });
            }
            let teacher = await Teacher.findOne({
                where: {
                    userId: decode.id,
                },
            });
            let courseName;
            if (teacher) {
                courseName = await Course.findOne({
                    where: {
                        id: teacher.courseId,
                    },
                });
            }

            req.data = {
                user,
                teacher,
                courseName: courseName?.name ? courseName.name : "",
            };
            next();
        } else {
            return res.status(401).send({
                statusCode: 401,
                message: "Unathorized",
            });
        }
    } catch (e) {
        console.log(e);
        return res.status(401).send({
            statusCode: 401,
            message: "Unathorized.",
        });
    }
};
module.exports = {
    authenticate,
    verifyToken,
};
