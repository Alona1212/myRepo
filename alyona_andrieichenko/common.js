// вывести имена незаблокированных юзеров, используя метод `aggregate()`
db.users.aggregate([
    { $match: { blocked: { $ne: true } } },
    { $project: { fullname: 1, _id: 0 } }
])