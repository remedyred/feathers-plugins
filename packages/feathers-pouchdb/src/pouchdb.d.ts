declare namespace PouchDB {
	interface Database {
		// comdb
		setPassword(password: string, options: {opts?: PouchDB.Configuration.LocalDatabaseConfiguration & PouchDB.Configuration.RemoteDatabaseConfiguration}): Promise<void>
		loadEncrypted(): Promise<void>
		loadDecrypted(): Promise<void>
		_encrypted?: Database

		// crypto-pouch
		crypto(password: string): Promise<void>
		removeCrypto(): void
	}
}
