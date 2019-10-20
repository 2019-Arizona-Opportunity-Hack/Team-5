const { Schema } = require("mongoose");

function mapQueryObjects(searchMap, schema) {
    const queryMap = {};
    Object.keys(searchMap).forEach(queryName => {
        const query = searchMap[queryName];
        const queryType = schema.path(queryName);
        if (queryType instanceof Schema.Types.String) {
            queryMap[queryName] = query.exactMatch;
        } else if (queryType instanceof Schema.Types.Number) {
            if (query.greaterThen) {
                queryMap[queryName] = {
                    ...queryMap[queryName],
                    $gte: query.greaterThen,
                };
            }
            if (query.lessThen) {
                queryMap[queryName] = {
                    ...queryMap[queryName],
                    $lte: query.lessThen,
                };
            }
        } else if (queryType instanceof Schema.Types.Boolean) {
            queryMap[queryName] = query.value;
        } else if (queryType instanceof Schema.Types.Date) {
            if (query.isBefore) {
                queryMap[queryName] = {
                    ...queryMap[queryName],
                    $lte: query.isBefore,
                };
            }
            if (query.isAfter) {
                queryMap[queryName] = {
                    ...queryMap[queryName],
                    $gte: query.isAfter,
                };
            }
            console.log(query);
        }
    });
    return queryMap;
}

module.exports = mapQueryObjects;
