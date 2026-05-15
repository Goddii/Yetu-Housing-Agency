import admin from 'firebase-admin'
import { readFileSync } from 'fs'

const serviceAccount = JSON.parse(readFileSync('./serviceAccountKey.json', 'utf8'))
const db_data = JSON.parse(readFileSync('./db.json', 'utf8'))

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

async function importCollection(collectionName, data) {
    console.log(`Importing ${collectionName}...`)
    for (const item of data) {
        const { id, ...rest } = item
        await db.collection(collectionName).doc(String(id)).set(rest)
        console.log(`  ✓ Added ${collectionName} document ${id}`)
    }
    console.log(`${collectionName} done!\n`)
}

async function main() {
    await importCollection('properties', db_data.properties)
    await importCollection('agents', db_data.agents)
    console.log('All data imported successfully!')
    process.exit(0)
}

main().catch(err => {
    console.error('Import failed:', err)
    process.exit(1)
})