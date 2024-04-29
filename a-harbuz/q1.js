db.reactions.aggregate([
    {
        $sample: {size : 3}
    }
])
