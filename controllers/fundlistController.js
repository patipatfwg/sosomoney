const models = require('../models/index');

exports.index = async (req,res,next) => {

    const list = await models.FundList.findAll({
        // attributes: { 
        //     exclude:  ['id','user_password','isActive']
        // },
        attributes: ['fund_title',['fund_images','images']],
        exclude:  ['id','ordinal','isActive'],
        order: [['ordinal','desc']]
    });

    res.status(200).json({
        code: 200,
        message: 'Fund List',
        data_list: list
        
    });
    
}