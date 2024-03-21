import {
	SET_ROLE_SIGNED_IN,
	SET_ROLE_PREMIUM,
	SET_ROLE_SIGN_UP,
} from './userActions'

const initialState = {
	role: 'notSignedIn', // 'notSignedIn', 'signedIn', 'premium'
}

function userReducer(state = initialState, action) {
	switch (action.type) {
		case SET_ROLE_SIGNED_IN:
			return { ...state, role: 'signedIn' }
		case SET_ROLE_PREMIUM:
			return { ...state, role: 'premium' }
		case SET_ROLE_SIGN_UP:
			return { ...state, role: 'notSignedIn' }
		default:
			return state
	}
}

export default userReducer
