const phoneData = {
    
    'EGYPT': {
        started: "+20", // Country code
        telecom: ['10', "11", '12', "15"], // Telecom companies
        number: 100000000, // Maximum number for generation
    },
    'KSA': {
        started: "+966",
        telecom: ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59'],
        number: 10000000,
    },
    'USA': {
        started: "+1",
        telecom: [], // Add relevant area codes if needed
        number: 10000000,
    },
    'UK': {
        started: "+44",
        telecom: [], // Add relevant area codes if needed
        number: 10000000,
    },
    'UAE': {
        started: "+971",
        telecom: ['2', '3', '4', '5', '6', '7', '8', '9'],
        number: 10000000,
    },
    'GERMANY': {
        started: "+49",
        telecom: ['30', '40', '69', '89', '151', '152', '160', '170', '171', '172'],
        number: 10000000,
    },
    'FRANCE': {
        started: "+33",
        telecom: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        number: 10000000,
    },
    'INDIA': {
        started: "+91",
        telecom: ['7', '8', '9'],
        number: 1000000000,
    },
    'AUSTRALIA': {
        started: "+61",
        telecom: ['2', '3', '4', '7', '8'],
        number: 1000000000,
    },
    'CANADA': {
        started: "+1",
        telecom: [ "204", "226", "236","249","250", "289","306", "343","416", "418" ], 
        number: 10000000,
    },
    'JAPAN': {
        started: "+81",
        telecom: ['3', '70', '80', '90'],
        number: 1000000000,
    },
    'BRAZIL': {
        started: "+55",
        telecom: ['11', '21', '31', '41', '51', '61', '71', '81', '91'],
        number: 1000000000,
    },
    'SOUTH AFRICA': {
        started: "+27",
        telecom: ['21', '31', '41', '51', '61', '71', '81', '82', '83', '84', '85', '86', '87', '88', '89'],
        number: 1000000000,
    },
};

module.exports = phoneData;
