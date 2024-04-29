// вывести имена незаблокированных юзеров, используя метод `aggregate()`
db.users.aggregate([
    {$match: {blocked: {$ne: true}}},
    {$project: {_id: 0, fullname: 1}}
])