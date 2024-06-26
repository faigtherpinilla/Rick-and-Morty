const { Favorite } = require ("../DB_connection")

const deletFav = async (req, res) =>{
    try{
        const { id } = req.params;
        await Favorite.destroy ({ where: { id } })
        const allFavs = await Favorite.findAll();
        return res.status(200).json(allFavs)

    }catch ( error ){
        return res.status(500).json(error.message)

    }
}

module.Exports = { deletFav }

