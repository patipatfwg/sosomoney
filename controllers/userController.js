const models = require('../models/index');

exports.index = async (req,res,next) => {

    const users = await models.User.findAll({
        // attributes: { 
        //     exclude:  ['id','user_password','isActive']
        // },
        
        include: [
            {
                model: models.FundList,
                as: 'fund_list',
                attributes: ['fund_title']
            }
        ],
        attributes: [['user_name','username'],'user_PIN'],
        exclude:  ['id','user_password','isActive'],
        order: [
            ['id','desc'],
            ['fund_list','id','desc']
        ]
    });

    res.status(200).json({
        code: 200,
        message: 'Users List',
        data_list: users
        
    });
    
}