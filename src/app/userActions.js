export const SET_ROLE_SIGNED_IN = 'SET_ROLE_SIGNED_IN'
export const SET_ROLE_PREMIUM = 'SET_ROLE_PREMIUM'
export const SET_ROLE_SIGN_UP = 'SET_ROLE_SIGN_UP'

export function setRoleSignedIn() {
	return { type: SET_ROLE_SIGNED_IN }
}

export function setRolePremium() {
	return { type: SET_ROLE_PREMIUM }
}

export function setRoleNotSignedIn() {
	return { type: SET_ROLE_SIGN_UP }
}
