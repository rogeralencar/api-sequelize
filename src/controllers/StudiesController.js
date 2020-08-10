const Studies = require('../models/Studies')

module.exports = {
    async store( req, res ) { 
        const { nameStudy, descStudy } = req.body
        const studies = await Studies.create({ nameStudy, descStudy  })
        
        return res.json(studies)
    },

    async list( req, res ) { 
        const { nameStudy, descStudy } = req.body
        const studies = await Studies.findAll({ nameStudy, descStudy })
        
        return res.json(studies)
    },

    async delete( req, res ) { 
        const id = req.params.id
        const studies = await Studies.truncate({id})

        return res.json(studies)
    },

    async update( req, res ) { 
        const { nameStudy, descStudy } = req.body
        const id = req.params.id
        const studies = await Studies.update({ nameStudy, descStudy },
            {where: {id: id}})

        return res.json(studies)
    }
}