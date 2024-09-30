import jwt from 'jsonwebtoken'

const verifyJwt = (req, res) => {
    const payload = { role: 'user' };

    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    )
    
    res.json({token})
}

export {
    verifyJwt
}