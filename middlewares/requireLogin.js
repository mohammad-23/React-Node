module.exports = (req, res, next) => {
    if (!req.user) {
        res.status(401).send({message: 'Log In first'});
    }
    
    next();
}