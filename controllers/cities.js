const connection = require('../db/db')

/////////////////////////////////////////////////////////////////////
//createNewCity


const createNewCity = (req, res) => {

    const query = `INSERT INTO city (name,image,description) VALUES (?,?,?)`
    const data = [req.body.name, req.body.image, req.body.description]

    connection.query(query, data, (err, result, field) => {
        if (err) {
            res.json({ success: false, massege: "server erorr", err: err })
            res.status(500)

        }
        else {
            res.status(201)
            res.json({ success: true, massege: "city craeted", result: result })


        }
    })
}



//////////////////////////////////////////////////////////////////////////////
//getAllCities



const getAllCities = (req, res) => {
    let skip = req.query.skip
    let limit = req.query.limit

    const query = `SELECT * FROM city WHERE is_deleted=0 LIMIT ${skip},${limit}`

    connection.query(query, (err, result, field) => {
        if (err) {

            res.json({ success: false, massege: "server erorr", err: err })
            res.status(500)

        }
        else {
            res.json({ success: true, massege: "All the cities", result: result })
            res.status(200)

        }
    })

};



/////////////////////////////////////////////////////////////////////////////
//getCityByName


const getCityByName = (req, res) => {

    const query = `SELECT * FROM city WHERE name=? AND is_deleted=0`;

    const cityName = [req.query.name];




    connection.query(query, cityName, (err, result) => {
        if (err) {

            res.json({ success: false, massege: "the city not found", err: err })
            res.status(404)

        }
        else {
            res.json({ success: true, massege: `the city:`, cities: result })
            res.status(200)

        }
    })
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//updateCityById




const updateCityById = (req, res) => {


    const query = `UPDATE city SET ? WHERE id=? AND is_deleted=0`
    const body = req.body
    const id = req.params.id
    const data = [body, id]

    connection.query(query, data, (err, result, field) => {
        if (err) {
            res.json(err)

        }
        else {
            res.json(result)

        }
    })
}


////////////////////////////////////////////////////////////////////////////////////
//deleteCityById



const deleteCityById = (req, res) => {

    const id = req.params.id;
    const query = `UPDATE city SET is_deleted=1 WHERE id=?;`

    connection.query(query, id, (err, result, field) => {
        if (err) {
            res.status(404)
            res.json({ success: false, massege: `The city: ${id} is not found`, err: err })

        }
        else {
            res.status(200)
            res.json({ success: true, massege: `Succeeded to delete city with id: ${id}` })

        }
    })
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////
//getCityById




const getCityById = (req, res) => {

    const query = `SELECT * FROM city WHERE id=?`
    const id = req.params.id
    connection.query(query, id, (err, result) => {
        if (err) {

            res.json({ success: false, massege: "the city not found", err: err })
            res.status(404)

        }
        else {
            res.json({ success: true, massege: `All the city id`, cities: result })
            res.status(200)

        }
    })
}



//========================================================


const getCityNoLimit = (req, res) => {


    const query = `SELECT * FROM city WHERE is_deleted=0`

    connection.query(query, (err, result, field) => {
        if (err) {

            res.json({ success: false, massege: "server erorr", err: err })
            res.status(500)

        }
        else {
            res.json({ success: true, massege: "All the cities", result: result })
            res.status(200)

        }
    })

};

///////////////////////////////////////////////////////////////////////////////////////
//module.exports


module.exports = {
    createNewCity, getAllCities, getCityByName,
    updateCityById, deleteCityById,
    getCityById, getCityNoLimit
}