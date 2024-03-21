import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage,
	serialize: (inboundState) => JSON.stringify(inboundState),
	deserialize: (outboundState) => JSON.parse(outboundState),
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
	reducer: {
		user: persistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					'persist/PERSIST',
					'persist/REHYDRATE',
					'persist/REGISTER',
				],
			},
		}),
})

export const persistor = persistStore(store)
