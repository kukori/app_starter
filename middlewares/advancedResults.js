const advancedResults = (model, populate) => async (req, res, next) => {
    const requestQuery = { ...req.query };

    const fieldsToRemove = ['select', 'sort', 'page', 'limit'];

    fieldsToRemove.forEach(param => delete(requestQuery[param]));

    let queryString = JSON.stringify(requestQuery);
    queryString = queryString.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`)

    let query = model.find(JSON.parse(queryString));

    if(req.query.select) {
        const select = req.query.select.split(',').join(' ');
        query = query.select(select);
    }

    // Sorting
    if(req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ');
        query = query.sort(sortBy);
    } else {
        query = query.sort('-createdAt');
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 100;
    const startIndex = (page -1) * limit;
    const endIndex = page * limit;
    const total = await model.countDocuments();

    query = query.skip(startIndex).limit(limit);

    // Populate
    if('populate') {
        query = query.populate(populate);
    }

    const results = await query;

    // Pagination result
    const pagination = {};

    if(endIndex < total) {
        pagination.next = {
            page: page + 1,
            limit
        }
    }

    if(startIndex > 0) {
        pagination.prev = {
            page: page - 1,
            limit
        }
    }

    res.advancedResults = {
        success: true,
        count: results.length,
        pagination,
        data: results
    }

    next();
};

module.exports = advancedResults;