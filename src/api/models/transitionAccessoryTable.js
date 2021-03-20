const transitionTypes = {
    deposit: 1,
    draft: 2,
    spend_debit: 3,
    spend_credit: 4,
    1: 'deposit',
    2: 'draft',
    3: 'spend_debit',
    4: 'spend_credit'
}

const transitionStatus = {
    pending: 1,
    done: 2,
    canceled: 3,
    1: 'pending',
    2: 'done',
    3: 'canceled'
}

module.exports = {
    transitionTypes,
    transitionStatus
}
