declare namespace PouchDB {
	interface Database {
		// comdb
		setPassword(password: string): Promise<void>
		loadEncrypted(): Promise<void>
		loadDecrypted(): Promise<void>

		// crypto-pouch
		crypto(password: string): Promise<void>
		removeCrypto(): void
	}
}
