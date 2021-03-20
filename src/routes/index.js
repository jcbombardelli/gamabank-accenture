const { status } = require('../api/controllers/app.controller')
const authcontroller = require('../api/controllers/auth.controller')
const usercontroller = require('../api/controllers/user.controller')
const transition = require('./transition')
const transfercontroller = require('../api/controllers/transfer.controller')
const {
    SignupRequestDTO,
    SignupResponseDTO
} = require('../api/models/dto/signup.dto')

const {
    LoginRequestDTO,
    LoginResponseDTO
} = require('../api/models/dto/auth.dto')

const Joi = require('joi')
const { options } = require('joi')

const root = {
    method: 'GET',
    path: '/',
    handler: status,
    options: {
        tags: ['api'],
        description: 'Verificação do status da aplicação',
        notes:
            'Pode ser utilizado sempre que outra aplicação estiver monitorando'
    }
}

const login = {
    method: 'POST',
    path: '/login',
    handler: authcontroller.login,
    options: {
        tags: ['api', 'login'],
        description: 'Rota de autenticação',
        notes: 'Anotações da rota...',
        validate: {
            payload: LoginRequestDTO
        },
        response: {
            status: {
                200: LoginResponseDTO,
                400: Joi.any()
            }
        }
    }
}

const validate = {
    method: 'GET',
    path: '/login/verify',
    handler: authcontroller.validate
}

const signup = {
    method: 'POST',
    path: '/signup',
    handler: usercontroller.newUser,
    options: {
        tags: ['api', 'register'],
        description: 'Rota de Cadastro do user',
        validate: {
            payload:SignupRequestDTO
        },
        response: {
            status: {
                200: SignupResponseDTO,
                400: Joi.any()
            }
        }
    }
}

const transfers = {
    method: 'POST',
    path: '/transfer',
    handler: transfercontroller.execute,
    options: {
        validate: {
            payload: LoginRequestDTO
        },
    }
}
module.exports = [root, login, validate, signup, transfers, ...transition]
