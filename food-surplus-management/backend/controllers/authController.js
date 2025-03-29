const User = require('../models/User');

exports.register = async (req, res) => {
    const { email, password, role } = req.body;
    const newUser = new User({ email, password, role });
    await newUser.save();
    res.sendStatus(201);
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    
    if (!user) return res.sendStatus(401);
    res.json({ role: user.role });
};
