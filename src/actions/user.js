import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.90,
                orderNmumber: 'DJK898JDKS',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 10.90,
                orderNmumber: 'DJK898323232S',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Dax Hught',
                    shippingAddress: '1111 West State Street'
                }
            },
            {
                _id: 2,
                total: 9.40,
                orderNmumber: '11DJK898JDKS',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1222 W State Street'
                }
            },
            {
                _id: 3,
                total: 7.90,
                orderNmumber: '34DJK898JDKS',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jo Hudgens',
                    shippingAddress: '12 West State Street'
                }
            },
            {
                _id: 4,
                total: 4.90,
                orderNmumber: '333DJK898JDKS',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 5,
                total: 19.90,
                orderNmumber: 'DJK898JDKS',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                total: 19.90,
                orderNmumber: 'DJK898JDKS',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 7,
                total: 19.90,
                orderNmumber: 'DJK898JDKS',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 8,
                total: 19.90,
                orderNmumber: 'DJK898JDKS',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            }
        ]
    })
}